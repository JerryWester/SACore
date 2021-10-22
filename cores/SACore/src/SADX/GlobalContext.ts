import { IGlobalContext } from "cores/SACore/API/SADX/SADX_API";
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
        return this.ModLoader.emulator.rdramRead32(0x801CC1E0);
    }
    get current_frame_count(): number{
        return this.ModLoader.emulator.rdramRead32(0x801CC1E4);
    }
    get game_paused(): boolean{
        return this.ModLoader.emulator.rdramRead8(0x801CC17F) === 1;
    }
}