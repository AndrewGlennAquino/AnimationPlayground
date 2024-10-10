/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates a simple street light */
export class StreetLight extends GrObject{
	constructor() {
		let streetlight = new T.Group(); // initialize streetlight group

        // initialize geometry
        let post = new T.BoxGeometry(0.1, 3, 0.1);
        let bulb = new T.CylinderGeometry(0.1, 0.1, 0.5, 32);

        // move geometry in place
        bulb.translate(0, 1.5, 0);

        // initialize materials
        let postMat = new T.MeshStandardMaterial({
            color: "black"
        });

        let bulbMat = new T.MeshStandardMaterial({
            color: "yellow"
        });

        // create meshes
        let postMesh = new T.Mesh(post, postMat);
        let bulbMesh = new T.Mesh(bulb, bulbMat);

        // add meshes to group
        streetlight.add(postMesh);
        streetlight.add(bulbMesh);

        // create a point light that emmits light from the bulb
        let light = new T.PointLight("white", 10, 10);
        light.position.set(0, 1.5, 0);
        bulbMesh.add(light);

		super("Streetlight", streetlight); // super call to parent class
	}
}