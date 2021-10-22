import { ICore } from 'modloader64_api/IModLoaderAPI';
import * as API from '../imports';

export interface ISaveContext {

}
export interface IGlobalContext {

}
export interface ISADXHelper {

}

export interface ISonic {

}

export interface ISADX extends ICore, API.Common.ISACommonCore {
  sonic: API.SADX.ISonic;
  chao: API.ChaoAPI.IChaoGarden;
  save: API.SADX.ISaveContext;
  helper: API.SADX.ISADXHelper;
  global: API.SADX.IGlobalContext;
}