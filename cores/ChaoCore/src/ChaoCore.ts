import { ICore, IExtendedCore, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { SupportedGames } from './Common/types/GameAliases';

export const enum ROMHeaders {
    SADX_GC = "GXSE",
    SA2B_GC = "GSNE"
}

export let current_game = SupportedGames.NONE;

export default class ChaoCore implements ICore, IExtendedCore {
    
    header = [ROMHeaders.SADX_GC, ROMHeaders.SA2B_GC];
    ModLoader!: IModLoaderAPI;
    rom_header!: IRomHeader;

    postconstructor() {
        switch (this.rom_header.id) {
            case ROMHeaders.SADX_GC: {
                current_game = SupportedGames.SADX_GC;
            } break;

            case ROMHeaders.SA2B_GC: {
                current_game = SupportedGames.SA2B_GC;
            } break;
        }
    }
    preinit() {}
    init() {}
    postinit() {}
    onTick() {}
    get heap_start(): number { return 0; }
    get heap_size(): number { return 0; }

}