/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates a tree */
export class Tree extends GrObject{
	constructor() {
		let tree = new T.Group(); // initialize tree group

		// initialize geometry for tree and stump
		let cone = new T.ConeGeometry(1, 2, 32);
		let stump = new T.CylinderGeometry(1, 1, 1, 32);

		// initialize materials for tree
		let coneMat = new T.MeshStandardMaterial({
			color: "green"
		});

		let stumpMat = new T.MeshStandardMaterial({
			color: "SaddleBrown"
		});

		// inialize meshes for tree
		let coneMesh = new T.Mesh(cone, coneMat);
		let stumpMesh = new T.Mesh(stump, stumpMat);

		// add meshes to tree group
		coneMesh.scale.set(0.5, 0.5, 0.5);
		coneMesh.translateY(1);
		tree.add(coneMesh);

		stumpMesh.scale.set(0.15, 1, 0.15);
		tree.add(stumpMesh);

		super("Tree", tree); // super call to parent class
	}
}