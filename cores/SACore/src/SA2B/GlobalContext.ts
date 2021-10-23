import { GameStates, IGlobalContext, Menus } from "../../API/SA2B/SA2B_API";
import IMemory from "modloader64_api/IMemory";
import { ILogger, IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { JSONTemplate } from "modloader64_api/JSONTemplate";

export class GlobalContext extends JSONTemplate implements IGlobalContext {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;

    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
    }

    get global_frame_count(): number {
        return this.ModLoader.emulator.rdramRead32(0x801CC1E0);
    }
    get current_frame_count(): number {
        return this.ModLoader.emulator.rdramRead32(0x801CC1E4);
    }
    get game_paused(): boolean {
        return this.ModLoader.emulator.rdramRead8(0x801CC17F) === 1;
    }
    get current_level(): number {
        return this.ModLoader.emulator.rdramRead8(0x803AD821);
    }
    get game_state(): GameStates {
        return this.ModLoader.emulator.rdramRead16(0x803AD81A);
    }
    get current_menu(): Menus {
        return this.ModLoader.emulator.rdramRead32(0x8150F674);
    }
}