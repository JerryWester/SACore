// import { current_game } from '../ChaoCore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ChaoAPI } from '../../API/imports';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
// import IMemory from 'modloader64_api/IMemory';
import { ChaoData } from './ChaoData';

export class ChaoGarden extends JSONTemplate implements ChaoAPI.IChaoGarden {
    // private ModLoader: IModLoaderAPI;
    // private emulator: IMemory;

    chaos: ChaoAPI.TupleOf<ChaoAPI.IChaoData, 24>;

    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        // this.ModLoader = ModLoader;
        // this.emulator = ModLoader.emulator;
        
        for (let i = 0; i < 24; i++) {
            this.chaos[i] = new ChaoData(ModLoader, log, i);
        }
    }
}