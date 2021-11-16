import * as denoShim from "deno.ns";
// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

export type OSType = "windows" | "linux" | "darwin";

export const osType: OSType = (() => {
  // deno-lint-ignore no-explicit-any
  const { Deno } = ({ ...denoShim, ...globalThis }) as any;
  if (typeof Deno?.build?.os === "string") {
    return Deno.build.os;
  }

  // deno-lint-ignore no-explicit-any
  const { navigator } = ({ ...denoShim, ...globalThis }) as any;
  if (navigator?.appVersion?.includes?.("Win") ?? false) {
    return "windows";
  }

  return "linux";
})();

export const isWindows = osType === "windows";
