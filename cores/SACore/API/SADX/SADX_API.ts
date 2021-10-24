import { ICore } from 'modloader64_api/IModLoaderAPI';
import * as API from '../imports';

export const enum Level {
  HedgehogHammer,
  EmeraldCoast,
  WindyValley,
  TwinklePark,
  SpeedHighway,
  RedMountain,
  SkyDeck,
  LostWorld,
  IceCap,
  Casinopolis,
  FinalEgg,
  B,
  HotShelter,
  D,
  E,
  Chaos0,
  Chaos2,
  Chaos4,
  Chaos6,
  PerfectChaos,
  EggHornet,
  EggWalker,
  EggViper,
  Zero,
  E101,
  E101R,
  StationSquare,
  EggCarrierOutside = 29,
  EggCarrierInside = 32,
  MysticRuins,
  Past,
  TwinkleCircuit,
  SkyChase1,
  SkyChase2,
  SandHill,
  SSGarden,
  ECGarden,
  MRGarden,
  ChaoRace,
  Invalid
};

export interface ITime {
  /* 0x0 */ minutes: number; // 0x1
  /* 0x1 */ seconds: number; // 0x1
  /* 0x2 */ frames: number; // 0x1
}

export interface ITwinkleCircuitTimes {
	/* 0x0 */ best_times: ITime[]; // 3 * 0x3; 0x9
	/* 0x9 */ lap1_time: ITime; // 0x3
	/* 0xC */ lap2_time: ITime; // 0x3
}

export interface IAdventureData
{
	/* 0x0 */ time_of_day: number; // 0x1
	/* 0x1 */ field_1: Buffer; // 0x1
	/* 0x2 */ field_2: Buffer; // 0x2
	/* 0x4 */ field_4: Buffer; // 0x2
	/* 0x6 */ entrance: number; // 0x2
	/* 0x8 */ level_act: number; // 0x2
	/* 0xA */ field_A: Buffer; // 0x2
};

export interface ISaveContext {
  /* 0x000 */ checksum: number; // 0x4
  /* 0x004 */ play_time: number; // 0x4
  /* 0x008 */ high_scores: number[]; // 32 * 0x4; 0x80
  /* 0x088 */ best_times: ITime[]; // 28 * 0x3; 0x54
  /* 0x0DC */ best_weights: number[]; // 12 * 0x2; 0x18
  /* 0x0F4 */ anonymous_4: Buffer; // 0x10
  /* 0x104 */ most_rings: number[]; // 32 * 0x2; 0x40
  /* 0x144 */ sky_chase1_high_scores: number[]; // 6 * 0x4; 0x18
  /* 0x15C */ sky_chase2_high_scores: number[]; // 6 * 0x4; 0x18
  /* 0x174 */ ice_cap_high_scores: number[]; // 6 * 0x4; 0x18
  /* 0x18C */ sand_hill_high_scores: number[]; // 6 * 0x4; 0x18
  /* 0x1A4 */ hedgehog_hammer_high_score1: number; // 0x4
  /* 0x1A8 */ hedgehog_hammer_high_score2: number; // 0x4
  /* 0x1AC */ hedgehog_hammer_high_score3: number; // 0x4
  /* 0x1B0 */ twinkle_circuit_best_times: ITwinkleCircuitTimes[]; // 6 * 0xF; 0x5A
  /* 0x20A */ boss_best_times: ITime[]; // 18 * 0x3; 0x36
  /* 0x240 */ emblems: number[]; // 17 * 0x1; 0x11
  /* 0x251 */ options: number; // 0x1
  /* 0x252 */ lives: number[]; // 7 * 0x1; 0x7
  /* 0x259 */ last_character: number; // 0x1
  /* 0x25A */ rumble: number; // 0x1
  /* 0x25B */ gap_25b: Buffer; // 0x1
  /* 0x25C */ last_level: number; // 0x2
  /* 0x25E */ gap_25e: Buffer; // 0x2
  /* 0x260 */ event_flags: number[]; // 64 * 0x1; 0x40
  /* 0x2A0 */ npc_flags: number[]; // 64 * 0x1; 0x40
  /* 0x2E0 */ gap_2e0: Buffer; // 0x8
  /* 0x2E8 */ adventure_data: IAdventureData[]; // 8 * 0xC; 0x60
  /* 0x348 */ level_clear: number[]; // 344 * 0x1; 0x158
  /* 0x4A0 */ mission_flags: number[]; // 60 * 0x1; 0x3C
  /* 0x4DC */ black_market_rings: number; // 0x4
  /* 0x4E0 */ metal_high_scores: number[]; // 10 * 0x4; 0x28
  /* 0x508 */ metal_best_times: ITime[]; // 10 * 0x3; 0x1E
  /* 0x526 */ metal_most_rings: number[]; // 10 * 0x2; 0x14
  /* 0x53A */ gap_53a: Buffer; // 0x2
  /* 0x53C */ metal_ice_cap_high_scores: number; // 3 * 0x4; 0xC
  /* 0x548 */ metal_sand_hill_high_scores: number; // 3 * 0x4; 0xC
  /* 0x554 */ metal_twinkle_circuit_best_times: ITwinkleCircuitTimes; // 0xF
  /* 0x563 */ metal_boss_best_times: ITime[]; // 3 * 0x3; 0x9
  /* 0x56C */ metal_emblems: number; // 0x4
}

export interface IGlobalContext {
  current_level: Level;
  global_frame_count: number;
  current_frame_count: number;
  game_state: number;

}
export interface ISADXHelper {
  isInGame(): boolean;
  isTitleScreen(): boolean;
  isLevelNumberValid(): boolean;
  isPaused(): boolean;
}

export interface ISonic {

}

export interface ISADXCore extends ICore, API.Common.ISACommonCore {
  sonic: API.SADX.ISonic;
  chao: API.ChaoAPI.IChaoGarden;
  save: API.SADX.ISaveContext;
  helper: API.SADX.ISADXHelper;
  global: API.SADX.IGlobalContext;
}

export enum SADXEvents {
	ON_LEVEL_CHANGE = 'onLevelChange',
}