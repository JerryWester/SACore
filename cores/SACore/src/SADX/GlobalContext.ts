import { IGlobalContext, Level } from "../..//API/SADX/SADX_API";
import IMemory from "modloader64_api/IMemory";
import { ILogger, IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { JSONTemplate } from "modloader64_api/JSONTemplate";

export class GlobalContext extends JSONTemplate implements IGlobalContext{
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    
    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
    }

    get global_frame_count(): number{
        return this.ModLoader.emulator.rdramRead32(0x8074C7A4);
    }
    get current_frame_count(): number{
        return this.ModLoader.emulator.rdramRead32(0x8074C7A0);
    }
    get current_level(): number {
        return this.ModLoader.emulator.rdramRead16(0x8074A7B6);
    }
    get game_state(): number{
        return this.ModLoader.emulator.rdramRead16(0x8074A7BC);
    }
    get game_mode(): number {
        return this.ModLoader.emulator.rdramRead8(0x8084593B);
    }
}