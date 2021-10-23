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


export interface ISaveContext {
  rings: number;
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