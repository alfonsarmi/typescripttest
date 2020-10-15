import { Scene } from "babylonjs";
import { Mesh } from "babylonjs/Meshes/mesh";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ElementRef } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Environment } from "../babylon/environment";
import { Model } from "../babylon/model";
import { BabylonEngineService } from "./babylon-engine.service";
import { TechnicalDebtAreasService } from "./technical-debt-areas.service";

describe("TechnicalDebtAreasService", () => {
  let babylonEngService: BabylonEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        })
    babylonEngService = TestBed.get(BabylonEngineService);
  });

  it("should be created", () => {
    const service: TechnicalDebtAreasService = TestBed.get(
      TechnicalDebtAreasService
    );
    expect(service).toBeTruthy();
  });

  it("it should return technicaldebtareas vertices", () => {
    const service: TechnicalDebtAreasService = TestBed.get(
      TechnicalDebtAreasService
    );

    spyOn(babylonEngService, "getMainModelVerticesData").and.returnValue([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      2,
      29,
      30,
    ]);

    expect(service.getTechnicalDebtVertices("testModelName").length).toBe(9);
  });
});
