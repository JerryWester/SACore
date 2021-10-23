import { onTick, Preinit, Init, Postinit, onPostTick, onViUpdate } from "modloader64_api/PluginLifecycle";
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { IModLoaderAPI, ILogger, ICore, ModLoaderEvents } from "modloader64_api/IModLoaderAPI";
import { bus, EventHandler, EventsClient } from "modloader64_api/EventHandler";
import { ROMHeaders } from "./SACore";
import * as API from '../API/imports';
import { ChaoGarden } from "./Common/Chao/ChaoGarden";
import { SaveContext } from "./SADX/SaveContext";
import { GlobalContext } from "./SADX/GlobalContext";
import { SADXHelper } from "./SADX/SADXHelper";

export class SonicAdventureDX implements ICore, API.SADX.ISADXCore, API.Common.ISACommonCore {
    header = [ROMHeaders.SADX_GC];
    @ModLoaderAPIInject()
    ModLoader: IModLoaderAPI = {} as IModLoaderAPI;
    heap_size = -1;
    heap_start = -1;
    rom_header!: IRomHeader;
    sonic!: API.SADX.ISonic;
    chao!: API.ChaoAPI.IChaoGarden;
    save!: API.SADX.ISaveContext;
    global!: API.SADX.IGlobalContext;
    helper!: API.SADX.ISADXHelper;

    chao_data() { return this.ModLoader.emulator.rdramRead32(0x0); }

    @Preinit()
    preinit() {
    }


    @Init()
    init(): void {
    }

    @Postinit()
    postinit(): void {
        this.sonic;
        this.chao = new ChaoGarden(this.ModLoader, this.ModLoader.logger, this.chao_data);
        this.save = new SaveContext(this.ModLoader, this.ModLoader.logger);
        this.global = new GlobalContext(this.ModLoader, this.ModLoader.logger);;
        this.helper = new SADXHelper(
            this.save,
            this.global,
            this.sonic,
            this.ModLoader.emulator
        );
    }

    @onTick()
    onTick() {
    }

    @onPostTick()
    onPostTick() {
    }
}