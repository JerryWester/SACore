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

    randomChao(chao: API.ChaoAPI.IChaoData) {
        chao.swim_fraction = Math.floor(Math.random() * 100);
        chao.fly_fraction = Math.floor(Math.random() * 100);
        chao.run_fraction = Math.floor(Math.random() * 100);
        chao.power_fraction = Math.floor(Math.random() * 100);
        chao.stamina_fraction = Math.floor(Math.random() * 100);

        chao.swim_grade = Math.floor(Math.random() * 6);
        chao.fly_grade = Math.floor(Math.random() * 6);
        chao.run_grade = Math.floor(Math.random() * 6);
        chao.power_grade = Math.floor(Math.random() * 6);
        chao.stamina_grade = Math.floor(Math.random() * 6);

        chao.swim_level = Math.floor(Math.random() * 100);
        chao.fly_level = Math.floor(Math.random() * 100);
        chao.run_level = Math.floor(Math.random() * 100);
        chao.power_level = Math.floor(Math.random() * 100);
        chao.stamina_level = Math.floor(Math.random() * 100);

        chao.swim_stat = Math.floor(Math.random() * 3267);
        chao.fly_stat = Math.floor(Math.random() * 3267);
        chao.run_stat = Math.floor(Math.random() * 3267);
        chao.power_stat = Math.floor(Math.random() * 3267);
        chao.stamina_stat = Math.floor(Math.random() * 3267);

        let color_values = Object.values(API.ChaoAPI.SA2BColor).map(val => {
            if (typeof(val) === "string") {
                return Number.parseInt(val);
            } else return val;
        });
        chao.color = color_values[Math.floor(Math.random() * color_values.length)];

        let eye_values = Object.values(API.ChaoAPI.Eyes).map(val => {
            if (typeof(val) === "string") {
                return Number.parseInt(val);
            } else return val;
        });
        chao.eye_type = eye_values[Math.floor(Math.random() * eye_values.length)];

        let mouth_values = Object.values(API.ChaoAPI.Mouth).map(val => {
            if (typeof(val) === "string") {
                return Number.parseInt(val);
            } else return val;
        });
        chao.mouth_type = mouth_values[Math.floor(Math.random() * mouth_values.length)];

        let animal = Object.values(API.ChaoAPI.SA2BAnimal).map(val => {
            if (typeof(val) === "string") {
                return Number.parseInt(val);
            } else return val;
        });
        chao.sa2b_arm_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_ear_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_forehead_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_horn_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_leg_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_tail_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_wing_type = animal[Math.floor(Math.random()* animal.length)];
        chao.sa2b_face_type = animal[Math.floor(Math.random()* animal.length)];

        chao.alignment = (Math.random() * 2) - 1;
        chao.monotone_highlights = !Math.floor(Math.random() * 2);
        chao.shiny = !Math.floor(Math.random() * 2);
        chao.hide_feet = !Math.floor(Math.random() * 2);
    }

    generateChao() {
        //console.log("Generating chao_data: " + this.chao_data().toString(16));
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
            if (this.global.current_frame_count === 20) {
                this.generateChao();
                this.isChaoSafe = true;
            }
            if (this.isChaoSafe) {
                if ((this.global.current_frame_count % 1000) === 0) {
                    for (let i = 0; i < 24; i++) {
                        if (this.chao.chaos[i].garden !== API.ChaoAPI.ChaoGarden.UNDEFINED) {
                            // console.log(`Chao[${i}] Name: ${this.chao.chaos[i].name}`);
                            // console.log(`Chao[${i}] PTR: ${this.chao.chaos[i].pointer.toString(16)}`);
                            // console.log(`Chao[${i}] Garden: ${this.chao.chaos[i].garden}`);
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