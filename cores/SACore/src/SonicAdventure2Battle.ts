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
    last_known_scene = -1;
    isChaoSafe = false;

    chao_data() { return this.ModLoader.emulator.rdramRead32(0x803AD80C) + 0x48E4; }

    generateChao() {
        console.log("Generating chao_data: " + this.chao_data().toString(16));
        this.chao = new ChaoGarden(this.ModLoader, this.ModLoader.logger, this.chao_data);
    }
    
    @Preinit()
    preinit() {
    }


    @Init()
    init(): void {
    }

    @Postinit()
    postinit(): void {
        this.sonic;
        this.save = new SaveContext(this.ModLoader, this.ModLoader.logger);
        this.global = new GlobalContext(this.ModLoader, this.ModLoader.logger);;
        this.helper;
    }

    @onTick()
    onTick() {
        if(this.global.game_paused) return;
        if (this.global.current_level !== 90) this.isChaoSafe = false;
        else if (this.global.current_level === 90) {
            if (this.global.current_frame_count === 60) {
                this.generateChao();
                this.isChaoSafe = true;
            }
            if (this.isChaoSafe) {
                if ((this.global.current_frame_count % 1000) === 0) {
                    for (let i = 0; i < 24; i++) {
                        if (this.chao.chaos[i].garden !== API.ChaoAPI.ChaoGarden.UNDEFINED) {
                            console.log(`Chao[${i}] Name: ${this.chao.chaos[i].name}`);
                            console.log(`Chao[${i}] PTR: ${this.chao.chaos[i].pointer.toString(16)}`);
                            console.log(`Chao[${i}] Garden: ${this.chao.chaos[i].garden}`);
                        }
                    }
                }
            }
        }
    }

    @onPostTick()
    onPostTick() {
    }
}