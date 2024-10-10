/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates moonlight and sky */
export class Moonlight extends GrObject{
	constructor() {
        let group = new T.Group(); // create group

        // create moonlight
        let moonlight = new T.PointLight("white", 500);
        moonlight.position.set(0, 20, 0);

        // add to group
        group.add(moonlight);

		super("Moonlight", group); // super call to parent class
	}
}