/*
 *   MIT License
 *
 *   Copyright (c) 2024, Mattias Aabmets
 *
 *   The contents of this file are subject to the terms and conditions defined in the License.
 *   You may not use, modify, or distribute this file except in compliance with the License.
 *
 *   SPDX-License-Identifier: MIT
 */

import type { Plugin } from "rollup";
import type { DecompressionOptions, RemoteBlobOption } from "./internal.d.ts";

declare module "rollup-plugin-pull-remote-blob" {
   export function pullRemoteBlobPlugin(options?: RemoteBlobOption[]): Plugin;
   export type { RemoteBlobOption, DecompressionOptions };
}
