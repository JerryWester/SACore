import { setupEventHandlers } from 'modloader64_api/EventHandler';
import { ICore, IExtendedCore, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { setupMLInjects } from 'modloader64_api/ModLoaderAPIInjector';
import { setupLifecycle_IPlugin, setupLifecycle } from 'modloader64_api/PluginLifecycle';
import { SupportedGames } from './Common/types/GameAliases';
import { SonicAdventure2Battle } from './SonicAdventure2Battle';
import { SonicAdventureDX } from './SonicAdventureDX';

export const enum ROMHeaders {
    SADX_GC = "GXSE",
    SA2B_GC = "GSNE"
}

export let current_game = SupportedGames.NONE;

export default class SACore implements ICore, IExtendedCore {
    
    header = [ROMHeaders.SADX_GC, ROMHeaders.SA2B_GC];
    ModLoader!: IModLoaderAPI;
    rom_header!: IRomHeader;
    heap_size = -1;
    heap_start = -1;
    
    SADX: SonicAdventureDX | undefined;
    SA2B: SonicAdventure2Battle | undefined;
    
    postconstructor() {
        switch (this.rom_header.id) {
            case ROMHeaders.SADX_GC: {
                current_game = SupportedGames.SADX_GC;
                this.SADX = new SonicAdventureDX();
                this.SADX.rom_header = this.rom_header;
            } break;

            case ROMHeaders.SA2B_GC: {
                current_game = SupportedGames.SA2B_GC;
                this.SA2B = new SonicAdventure2Battle();
                this.SA2B.rom_header = this.rom_header;
            } break;
        }
    }
    preinit() {}
    
    init(): void {
        if (this.SADX !== undefined) {
            setupEventHandlers(this.SADX, this.ModLoader.publicBus);
            setupLifecycle_IPlugin(this.SADX);
            setupLifecycle(this.SADX);
            setupMLInjects(this.SADX, this.ModLoader);
            this.SADX.preinit();
        } else if (this.SA2B !== undefined) {
            setupEventHandlers(this.SA2B, this.ModLoader.publicBus);
            setupLifecycle_IPlugin(this.SA2B);
            setupLifecycle(this.SA2B);
            setupMLInjects(this.SA2B, this.ModLoader);
            this.SA2B.preinit();
        }
    }

    postinit(): void {
    }

    onTick() {}

}