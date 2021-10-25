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
import { SADXEvents } from "../API/SADX/SADX_API";

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
    last_known_level = -1;
    isChaoSafe = false;
    eventTicks: Map<string, Function> = new Map<string, Function>();
    touching_loading_zone = false;
    isSaveLoaded = false;
    temp: boolean = false;
    framecount: number = -1;

    chao_data() { return this.ModLoader.emulator.rdramRead32(0x81055158) }


    @Preinit()
    preinit() {
    }


    @Init()
    init(): void {
        //this.eventTicks.set('waitingForLoadingZoneTrigger', () => {
        //    if (
        //        this.helper.isPlayerEnteringLoadingZone() &&
        //        !this.touching_loading_zone
        //    ) {
        //        bus.emit(SADXEvents.ON_LOADING_ZONE, {});
        //        this.touching_loading_zone = true;
        //    }
        //});
        this.eventTicks.set('waitingForFrameCount', () => {
            //console.log(`framecount: ${this.framecount}`);
            if(this.last_known_level !== this.global.current_level && this.helper.isLevelNumberValid()){
                this.last_known_level = this.global.current_level;
                this.framecount = -1;
            }
            if (
                this.framecount === 1 &&
                !this.helper.isInMenu() &&
                this.helper.isLevelNumberValid() &&
                !this.temp
            ) {
                //console.log(`ON_LEVEL_CHANGE`)
                bus.emit(SADXEvents.ON_LEVEL_CHANGE, this.last_known_level);
                this.touching_loading_zone = false;
                this.temp = true;
            }
            if (this.framecount === 60) this.temp = false;
        });
        this.eventTicks.set('waitingForMainMenu', () => {
            //console.log(`current_frame_count: ${this.framecount}`);
            if (
                this.helper.isInMenu() && !this.isSaveLoaded
            ) {
                this.isSaveLoaded = true;
                bus.emit(SADXEvents.ON_SAVE_LOADED, this.isSaveLoaded);
            }
        });
    }

    @Postinit()
    postinit(): void {
        this.sonic;
        this.save = new SaveContext(this.ModLoader, this.ModLoader.logger);
        this.global = new GlobalContext(this.ModLoader, this.ModLoader.logger);
        this.helper = new SADXHelper(
            this.save,
            this.global,
            this.sonic,
            this.ModLoader.emulator
        );
        this.chao = new ChaoGarden(this.ModLoader);
        this.ModLoader.utils.setIntervalFrames(() => {
            //console.log('--------------------------------------------');
            //console.log(`black_market_rings: ${this.save.black_market_rings}`);
            
        }, 300);
    }

    @onTick()
    onTick() {
        if (!this.helper.isTitleScreen()) {
            this.eventTicks.forEach((value: Function, key: string) => {
                value();
            });
        }
        this.framecount++;
    }

    @onPostTick()
    onPostTick() {
    }
}