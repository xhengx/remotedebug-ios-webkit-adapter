//
// Copyright (C) Microsoft. All rights reserved.
//

import { IOSProtocol, IIOSProtocolOptions } from './ios';
import { Target } from '../target';

export class IOS9Protocol extends IOSProtocol {

    constructor(target: Target, options?: IIOSProtocolOptions) {
        super(target, options);
    }

    protected mapSelectorList (selectorList): void {
        const range = selectorList.range;

        for (let i = 0; i < selectorList.selectors.length; i++) {
            if (range !== undefined) {
                selectorList.selectors[i].range = range;
            }
        }

        delete selectorList.range;
    }
}
