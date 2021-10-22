// import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ChaoAPI } from '../../../API/imports';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
// import IMemory from 'modloader64_api/IMemory';
import { ChaoData } from './ChaoData';

export class ChaoGarden extends JSONTemplate implements ChaoAPI.IChaoGarden {
    // private ModLoader: IModLoaderAPI;
    // private emulator: IMemory;

    chaos: ChaoAPI.IChaoData[];

    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        // this.ModLoader = ModLoader;
        // this.emulator = ModLoader.emulator;
        this.chaos = [];
        
        for (let i = 0; i < 24; i++) {
            this.chaos[i] = new ChaoData(ModLoader, log, i);
        }
        Object.seal(this.chaos);
    }

    jsonFields: string[] = [
        'chaos'
    ];
}