import { ICore } from 'modloader64_api/IModLoaderAPI';
import * as API from '../imports';
import { IFakeArray } from '../../src/Common/types/FakeArray';

export const enum EventFlags
{
	Event_SonicUnlockedAdventure = 0x41,
	Event_TailsUnlockedAdventure = 0x42,
	Event_KnucklesUnlockedAdventure = 0x43,
	Event_AmyUnlockedAdventure = 0x44,
	Event_GammaUnlockedAdventure = 0x45,
	Event_BigUnlockedAdventure = 0x46,
	Event_SuperSonicUnlockedAdventure = 0x47,
	Event_SonicAdventureComplete = 0x48,
	Event_TailsAdventureComplete = 0x49,
	Event_KnucklesAdventureComplete = 0x4A,
	Event_AmyAdventureComplete = 0x4B,
	Event_GammaAdventureComplete = 0x4C,
	Event_BigAdventureComplete = 0x4D,
	Event_SuperSonicAdventureComplete = 0x4E,
	Event_GoldChaoEgg = 0x4F,
	Event_SilverChaoEgg = 0x50,
	Event_BlackChaoEgg = 0x51,
	Event_Sonic_HotelOpen = 0x81,
	Event_Sonic_StationOpen = 0x82,
	Event_Sonic_CasinoAlwaysOpen = 0x84,
	Event_Sonic_IceStoneAvailable = 0x85,
	Event_Sonic_HotelToCasinoOpen = 0x86,
	Event_Sonic_CasinopolisOpen = 0x87,
	Event_Sonic_StationToCasinoOpen = 0x88,
	Event_Sonic_TwinkleParkOpen = 0x89,
	Event_Sonic_TwinkleCircuitOpen = 0x8A,
	Event_Sonic_SpeedHighwayOpen = 0x8C,
	Event_Sonic_LightShoes = 0x8D,
	Event_Sonic_CrystalRing = 0x8E,
	Event_Sonic_EggCarrierTransformed = 0x91,
	Event_Sonic_EggCarrierOpen = 0x92,
	Event_Sonic_EggCarrierSunk = 0x93,
	Event_Sonic_WindyValleyOpen = 0x94,
	Event_Sonic_AngelIslandOpen = 0x96,
	Event_Sonic_IceCapOpen = 0x97,
	Event_Sonic_RedMountainOpen = 0x99,
	Event_Sonic_ShrineOpen = 0x9A,
	Event_Sonic_JungleOpen = 0x9B,
	Event_Sonic_LostWorldOpen = 0x9C,
	Event_Sonic_FinalEggFieldOpen = 0x9D,
	Event_Sonic_AncientLight = 0x9F,
	Event_Sonic_FinalEggOpen = 0xA0,
	Event_Sonic_TrainOpen = 0xA1,
	Event_Sonic_GammaDefeated = 0xA4,
	Event_Sonic_KnucklesDefeated = 0xA5,
	Event_Sonic_EmeraldCoastClear = 0xA6,
	Event_Sonic_WindyValleyClear = 0xA7,
	Event_Sonic_CasinopolisClear = 0xA8,
	Event_Sonic_TwinkleParkClear = 0xA9,
	Event_Sonic_SpeedHighwayClear = 0xAA,
	Event_Sonic_RedMountainClear = 0xAB,
	Event_Sonic_IceCapClear = 0xAC,
	Event_Sonic_SkyDeckClear = 0xAD,
	Event_Sonic_LostWorldClear = 0xAE,
	Event_Sonic_FinalEggClear = 0xAF,
	Event_Sonic_Chaos0Clear = 0xB0,
	Event_Sonic_Chaos4Clear = 0xB1,
	Event_Sonic_Chaos6Clear = 0xB2,
	Event_Sonic_EggHornetClear = 0xB3,
	Event_Sonic_EggViperClear = 0xB4,
	Event_Sonic_SkyChaseAct1Clear = 0xB5,
	Event_Sonic_SkyChaseAct2Clear = 0xB6,
	Event_Sonic_AdventureClear1 = 0xB7,
	Event_Sonic_AdventureClear2 = 0xB8,
	Event_Sonic_AdventureClear3 = 0xB9,
	Event_Tails_HotelOpen = 0xC1,
	Event_Tails_CasinopolisOpen = 0xC5,
	Event_Tails_StationOpen = 0xCA,
	Event_Tails_JetAnklet = 0xCD,
	Event_Tails_EggCarrierSunk = 0xD2,
	Event_Tails_WindyValleyOpen = 0xD3,
	Event_Tails_IceCapOpen = 0xD6,
	Event_Tails_RhythmBadge = 0xDB,
	Event_Tails_TrainOpen = 0xDC,
	Event_Tails_WindyValleyClear = 0xE1,
	Event_Tails_CasinopolisClear = 0xE2,
	Event_Tails_SpeedHighwayClear = 0xE3,
	Event_Tails_IceCapClear = 0xE4,
	Event_Tails_SkyDeckClear = 0xE5,
	Event_Tails_SandHillClear = 0xE6,
	Event_Tails_Chaos4Clear = 0xE7,
	Event_Tails_EggWalkerClear = 0xE8,
	Event_Tails_EggHornetClear = 0xE9,
	Event_Tails_SkyChaseAct1Clear = 0xEA,
	Event_Tails_SkyChaseAct2Clear = 0xEB,
	Event_Tails_EmeraldCoastClear = 0xEC,
	Event_Tails_RedMountainClear = 0xED,
	Event_Knuckles_CasinopolisOpen = 0x103,
	Event_Knuckles_EggCarrierSunk = 0x10F,
	Event_Knuckles_ShovelClaw = 0x119,
	Event_Knuckles_FightingGloves = 0x11A,
	Event_Knuckles_CasinopolisClear = 0x11F,
	Event_Knuckles_SpeedHighwayClear = 0x120,
	Event_Knuckles_RedMountainClear = 0x121,
	Event_Knuckles_LostWorldClear = 0x122,
	Event_Knuckles_Chaos2Clear = 0x123,
	Event_Knuckles_Chaos6Clear = 0x124,
	Event_Knuckles_Chaos4Clear = 0x125,
	Event_Knuckles_SkyDeckClear = 0x126,
	Event_Amy_EggCarrierSunk = 0x14D,
	Event_Amy_WarriorFeather = 0x152,
	Event_Amy_TwinkleParkClear = 0x156,
	Event_Amy_HotShelterClear = 0x157,
	Event_Amy_FinalEggClear = 0x158,
	Event_Amy_ZeroClear = 0x159,
	Event_Amy_LongHammer = 0x15E,
	Event_Gamma_JetBooster = 0x189,
	Event_Gamma_LaserBlaster = 0x18A,
	Event_Gamma_EggCarrierSunk = 0x18C,
	Event_Gamma_WindyValleyOpen = 0x190,
	Event_Gamma_EmeraldCoastClear = 0x19B,
	Event_Gamma_WindyValleyClear = 0x19C,
	Event_Gamma_RedMountainClear = 0x19D,
	Event_Gamma_HotShelterClear = 0x19E,
	Event_Gamma_FinalEggClear = 0x19F,
	Event_Gamma_E101Clear = 0x1A0,
	Event_Gamma_E101mkIIClear = 0x1A1,
	Event_Big_EggCarrierSunk = 0x1CB,
	Event_Big_LifeRing = 0x1D0,
	Event_Big_PowerRod = 0x1D1,
	Event_Big_EmeraldCoastClear = 0x1D5,
	Event_Big_HotShelterClear = 0x1D6,
	Event_Big_TwinkleParkClear = 0x1D7,
	Event_Big_IceCapClear = 0x1D8,
	Event_Big_Chaos6Clear = 0x1D9
};

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

export enum GameModes
{
	Restart,
	Logo,
	Exit,
	Adventure_ActionStg = 4,
	Adventure_Field,
	Movie = 8,
	Trial,
	Mission,
	CharSel,
	Menu,
	Restart2,
	StartAdventure = 17,
	Adventure_Story,
	StartCredits = 21,
	Credits,
};

export interface ITwinkleCircuitTimes {
	/* 0x0 */ best_times: IFakeArray<API.Common.ITime>; // 3 * 0x3; 0x9
	/* 0x9 */ lap1_time: API.Common.ITime; // 0x3
	/* 0xC */ lap2_time: API.Common.ITime; // 0x3
}

export interface IAdventureData {
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
  /* 0x008 */ high_scores: IFakeArray<number>; // 32 * 0x4; 0x80
  /* 0x088 */ best_times: IFakeArray<API.Common.ITime>; // 28 * 0x3; 0x54
  /* 0x0DC */ best_weights: IFakeArray<number>; // 12 * 0x2; 0x18
  /* 0x0F4 */ anonymous_4: Buffer; // 0x10
  /* 0x104 */ most_rings: IFakeArray<number>; // 32 * 0x2; 0x40
  /* 0x144 */ sky_chase1_high_scores: IFakeArray<number>; // 6 * 0x4; 0x18
  /* 0x15C */ sky_chase2_high_scores: IFakeArray<number>; // 6 * 0x4; 0x18
  /* 0x174 */ ice_cap_high_scores: IFakeArray<number>; // 6 * 0x4; 0x18
  /* 0x18C */ sand_hill_high_scores: IFakeArray<number>; // 6 * 0x4; 0x18
  /* 0x1A4 */ hedgehog_hammer_high_score1: number; // 0x4
  /* 0x1A8 */ hedgehog_hammer_high_score2: number; // 0x4
  /* 0x1AC */ hedgehog_hammer_high_score3: number; // 0x4
  /* 0x1B0 */ twinkle_circuit_best_times: IFakeArray<ITwinkleCircuitTimes>; // 6 * 0xF; 0x5A
  /* 0x20A */ boss_best_times: IFakeArray<API.Common.ITime>; // 18 * 0x3; 0x36
  /* 0x240 */ emblems: IFakeArray<number>; // 17 * 0x1; 0x11
  /* 0x251 */ options: number; // 0x1
  /* 0x252 */ lives: IFakeArray<number>; // 7 * 0x1; 0x7
  /* 0x259 */ last_character: number; // 0x1
  /* 0x25A */ rumble: number; // 0x1
  /* 0x25B */ gap_25b: Buffer; // 0x1
  /* 0x25C */ last_level: number; // 0x2
  /* 0x25E */ gap_25e: Buffer; // 0x2
  /* 0x260 */ event_flags: Buffer; // 64 * 0x1; 0x40
  /* 0x2A0 */ npc_flags: IFakeArray<number>; // 64 * 0x1; 0x40
  /* 0x2E0 */ gap_2e0: Buffer; // 0x8
  /* 0x2E8 */ adventure_data: IFakeArray<IAdventureData>; // 8 * 0xC; 0x60
  /* 0x348 */ level_clear: IFakeArray<number>; // 344 * 0x1; 0x158
  /* 0x4A0 */ mission_flags: IFakeArray<number>; // 60 * 0x1; 0x3C
  /* 0x4DC */ black_market_rings: number; // 0x4
  /* 0x4E0 */ metal_high_scores: IFakeArray<number>; // 10 * 0x4; 0x28
  /* 0x508 */ metal_best_times: IFakeArray<API.Common.ITime>; // 10 * 0x3; 0x1E
  /* 0x526 */ metal_most_rings: IFakeArray<number>; // 10 * 0x2; 0x14
  /* 0x53A */ gap_53a: Buffer; // 0x2
  /* 0x53C */ metal_ice_cap_high_scores: IFakeArray<number>; // 3 * 0x4; 0xC
  /* 0x548 */ metal_sand_hill_high_scores: IFakeArray<number>; // 3 * 0x4; 0xC
  /* 0x554 */ metal_twinkle_circuit_best_times: ITwinkleCircuitTimes; // 0xF
  /* 0x563 */ metal_boss_best_times: IFakeArray<API.Common.ITime>; // 3 * 0x3; 0x9
  /* 0x56C */ metal_emblems: number; // 0x4
}

export interface IGlobalContext {
  current_level: number;
  global_frame_count: number;
  current_frame_count: number;
  game_state: number;
  game_mode: number;

}
export interface ISADXHelper {
  isPlayerEnteringLoadingZone(): boolean;
  isDemoMode(): boolean;
  isInGame(): boolean;
  isInMenu(): boolean;
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
	ON_LOADING_ZONE = 'onLoadingZone',
	ON_SAVE_LOADED = 'onSaveLoaded',
}