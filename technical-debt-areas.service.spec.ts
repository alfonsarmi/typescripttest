import { Scene } from "babylonjs";
import { Mesh } from "babylonjs/Meshes/mesh";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ElementRef } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Environment } from "../babylon/environment";
import { Model } from "../babylon/model";
import { BabylonEngineService } from "./babylon-engine.service";
import { TechnicalDebtAreasService } from "./technical-debt-areas.service";
import { RouterTestingModule } from '@angular/router/testing';

describe("TechnicalDebtAreasService", () => {
  let babylonEngService: BabylonEngineService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
    });

    babylonEngService = TestBed.inject(BabylonEngineService);
  });

  it("should be created", () => {
    const service: TechnicalDebtAreasService = TestBed.inject(
      TechnicalDebtAreasService
    );
    expect(service).toBeTruthy();
  });
});
