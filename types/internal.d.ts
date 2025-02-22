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

import type cp from "cli-progress";

export interface UrlDest {
   url: string;
   dest: string;
   [key: string]: any;
}

export interface DecompressionOptions {
   filter?: string[];
   strip?: number;
}

export interface RemoteBlobOption {
   url: string;
   dest: string;
   sizeBytes?: number;
   prettyName?: string;
   alwaysPull?: boolean;
   decompress?: boolean | DecompressionOptions;
}

export interface PluginConfig {
   blobs: RemoteBlobOption[];
   showProgress?: boolean;
}

export interface DestDetails {
   fileExists: boolean;
   filePath: string;
   dirExists: boolean;
   dirPath: string;
}

export interface HistoryFileEntry {
   url: string;
   dest: string;
   blobOptionsDigest: string;
   decompression: {
      optionsDigest: string;
      filesList: string[];
   };
}

export interface HistoryFileContents {
   [key: string]: HistoryFileEntry;
}

export interface ProcessorArgs {
   contents: HistoryFileContents;
   option: RemoteBlobOption;
}

export interface ProcessorReturn {
   option: RemoteBlobOption;
   entry: HistoryFileEntry;
   details: DestDetails;
   skipDownload: boolean;
}

export interface DownloaderArgs {
   config: PluginConfig;
   mustDownload: ProcessorReturn[];
}

export interface ProgressBarMap {
   [key: string]: {
      bar: cp.SingleBar;
   };
}

export interface ProgressBarsReturn {
   multiBar: cp.MultiBar;
   progBarMap: ProgressBarMap;
}

export interface WorkerData {
   option: RemoteBlobOption;
   details: DestDetails;
}

export type WorkerMessage =
   | { type: "progress"; bytes: number }
   | { type: "error"; error: string }
   | { type: "done"; filesList: string[] }
   | { type: "decompressing" };
