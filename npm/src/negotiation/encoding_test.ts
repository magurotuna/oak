import * as denoShim from "deno.ns";
// Copyright 2018-2021 the oak authors. All rights reserved. MIT license.

import { assertEquals } from "../test_deps.js";
import { preferredEncodings } from "./encoding.js";

const { test } = denoShim.Deno;

test({
  name: "preferredEncodings",
  fn() {
    assertEquals(preferredEncodings("gzip, compress;q=0.2, identity;q=0.5"), [
      "gzip",
      "identity",
      "compress",
    ]);
  },
});

test({
  name: "preferredEncodings with available encodings",
  fn() {
    assertEquals(
      preferredEncodings("gzip, compress;q=0.2, identity;q=0.5", [
        "identity",
        "gzip",
      ]),
      ["gzip", "identity"],
    );
  },
});
