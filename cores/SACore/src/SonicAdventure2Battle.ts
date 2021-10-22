import { onTick, Preinit, Init, Postinit, onPostTick, onViUpdate } from "modloader64_api/PluginLifecycle";
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { IModLoaderAPI, ILogger, ICore, ModLoaderEvents } from "modloader64_api/IModLoaderAPI";
import { bus, EventHandler, EventsClient } from "modloader64_api/EventHandler";
import { ROMHeaders } from "./SACore";
import * as API from '../API/imports';
import { ChaoGarden } from "./Common/Chao/ChaoGarden";
import { SaveContext } from "./SA2B/SaveContext";
import { GlobalContext } from "./SA2B/GlobalContext";

export class SonicAdventure2Battle implements ICore, API.SA2B.ISA2B, API.Common.ISACommonCore {
    header = [ROMHeaders.SA2B_GC];
    @ModLoaderAPIInject()
    ModLoader: IModLoaderAPI = {} as IModLoaderAPI;
    heap_size = -1;
    heap_start = -1;
    rom_header!: IRomHeader;
    sonic!: API.SA2B.ISonic;
    chao!: API.ChaoAPI.IChaoGarden;
    save!: API.SA2B.ISaveContext;
    global!: API.SA2B.IGlobalContext;
    helper!: API.SA2B.ISA2BHelper;

    @Preinit()
    preinit() {
    }


    @Init()
    init(): void {
    }

    @Postinit()
    postinit(): void {
        this.sonic;
        this.chao = new ChaoGarden(this.ModLoader, this.ModLoader.logger);
        this.save = new SaveContext(this.ModLoader, this.ModLoader.logger);
        this.global = new GlobalContext(this.ModLoader, this.ModLoader.logger);;
        this.helper;
    }

    @onTick()
    onTick() {
    }

    @onPostTick()
    onPostTick() {
    }
}