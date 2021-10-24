import * as API from '../../../API/imports';
import IMemory from 'modloader64_api/IMemory';
import { Time } from '../CommonClasses';
import { TwinkleCircuitTimes, AdventureData } from '../../SADX/SaveContext';
import { SaveLevelScore, SaveKartTime, SaveKartInfo, SaveLevelInfo } from '../../SA2B/SaveContext';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';

type FakeArrayTypes = number | API.Common.ITime | API.SADX.ITwinkleCircuitTimes
    | API.SADX.IAdventureData | API.SA2B.ISaveLevelScore | API.SA2B.ISaveKartTime
    | API.SA2B.ISaveKartInfo | API.SA2B.ISaveLevelInfo;

export interface IFakeArray<T extends FakeArrayTypes> {
    [num: number]: T;
    length: number;
}

class FakeArrayBase<T extends FakeArrayTypes> extends JSONTemplate implements IFakeArray<T> {
    [num: number]: T;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super();
        this._length = length;
    }

    toJSON() {
        const jsonObj: any = {};
        for (let i = 0; i < this.length; i++) {
            let v = (this as any)[this[i]];
            if (v instanceof JSONTemplate) {
                jsonObj[this[i]] = v.toJSON();
            } else {
                jsonObj[this[i]] = v;
            }
        }
        return jsonObj;
    }
}

export class FakeArray8 extends FakeArrayBase<number> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead8(address + i) },
                set(num: number) { ModLoader.emulator.rdramWrite8(address + i, num) }
            });
        }
    }
}

export class FakeArray16 extends FakeArrayBase<number> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead16(address + i * 2) },
                set(num: number) { ModLoader.emulator.rdramWrite16(address + i * 2, num) }
            });
        }
    }
}

export class FakeArray32 extends FakeArrayBase<number> {
constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead32(address + i * 4) },
                set(num: number) { ModLoader.emulator.rdramWrite32(address + i * 4, num) }
            });
        }
    }
}

export class FakeArrayTime extends FakeArrayBase<API.Common.ITime> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new Time(ModLoader, log, address + i * 3) }
            });
        }
    }
}

export class FakeArrayTwinkleCircuitTimes extends FakeArrayBase<API.SADX.ITwinkleCircuitTimes> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new TwinkleCircuitTimes(ModLoader, log, address + i * 0xF) }
            });
        }
    }
}

export class FakeArrayAdventureData extends FakeArrayBase<API.SADX.IAdventureData> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new AdventureData(ModLoader, log, address + i * 0xC) }
            });
        }
    }
}

export class FakeArraySaveLevelScore extends FakeArrayBase<API.SA2B.ISaveLevelScore> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new SaveLevelScore(ModLoader, log, address + i * 0xC) }
            });
        }
    }
}

export class FakeArraySaveKartTime extends FakeArrayBase<API.SA2B.ISaveKartTime> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new SaveKartTime(ModLoader, log, address + i * 0x4) }
            });
        }
    }
}

export class FakeArraySaveKartInfo extends FakeArrayBase<API.SA2B.ISaveKartInfo> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new SaveKartInfo(ModLoader, log, address + i * 0xD) }
            });
        }
    }
}

export class FakeArraySaveLevelInfo extends FakeArrayBase<API.SA2B.ISaveLevelInfo> {
    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        super(ModLoader, log, address, length);
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new SaveLevelInfo(ModLoader, log, address + i * 0xC4) }
            });
        }
    }
}