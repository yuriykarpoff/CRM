'use strict';

import { listIPv4 } from "./ipv4.js";

const uniqueAddresses = () => {
    return new Set(listIPv4).size
}

console.log(uniqueAddresses())