// import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ISaveContext } from "../../API/SA2B/SA2B_API";
import IMemory from 'modloader64_api/IMemory';

export class SaveContext extends JSONTemplate implements ISaveContext {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;

    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
    }
    jsonFields: string[] = [
        'rings'
    ];

    get rings() { return this.emulator.rdramReadS16(0x8074C7A8); }
    set rings(num: number) { this.emulator.rdramWrite16(0x8074C7A8, num); }
}