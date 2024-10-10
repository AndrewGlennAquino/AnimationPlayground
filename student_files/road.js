/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates a road tile */
export class Road extends GrObject{
	constructor() {
		let road = new T.Group(); // initialize road group

        // initialize geometries
        let pavement = new T.BoxGeometry(4, 0.3, 5);
        let sidewalk = new T.BoxGeometry(5, 0.2, 5);

        // initialize materials
        let pavementMat = new T.MeshBasicMaterial({
            color: "black"
        });

        let sidewalkMat = new T.MeshBasicMaterial({
            color: "grey"
        });

        // initialize meshs
        let pavementMesh = new T.Mesh(pavement, pavementMat);
        let sideWalkMesh = new T.Mesh(sidewalk, sidewalkMat);

        // add mesh to group
        road.add(pavementMesh);
        road.add(sideWalkMesh);

		super("Road", road); // super call to parent class
	}
}

/** Class that creates a road tile */
export class Walkway extends GrObject{
	constructor() {
		let walkway = new T.Group(); // initialize walkway group

        // initialize geometries
        let sidewalk = new T.BoxGeometry(4, 0.2, 5);

        let sidewalkMat = new T.MeshBasicMaterial({
            color: "grey"
        });

        // initialize meshs
        let sideWalkMesh = new T.Mesh(sidewalk, sidewalkMat);

        // add mesh to group
        walkway.add(sideWalkMesh);

		super("Walkway", walkway); // super call to parent class
	}
}