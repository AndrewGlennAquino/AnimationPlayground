/*jshint esversion: 6 */
// @ts-check

/** Import */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates random skyscraper */
export class Skyscrapers extends GrObject {
	constructor() {
		let skyscraper = new T.Group(); // initialize skyscraper group

		// initialize geometries
		let wallGeometry = new T.BufferGeometry();
		
		// create random heights for skyscrapers
		let height = 2 + (Math.random() * 4);

		// verticies of skyscrapers
		const wallVertices = new Float32Array([
			0, 0, 0,	// front
			1, 0, 0,
			0, height, 0,

			0, height, 0,
			1, 0, 0,
			1, height, 0,

			0, 0, -1,	// left
			0, 0, 0,
			0, height, -1,

			0, height, -1,
			0, 0, 0,
			0, height, 0,

			1, 0, -1,	// back
			0, 0, -1,
			1, height, -1,

			1, height, -1,
			0, 0, -1,
			0, height, -1,

			1, 0, 0,	// right
			1, 0, -1,
			1, height, 0,

			1, height, 0,
			1, 0, -1,
			1, height, -1,

			0, height, 0,	// top
			1, height, 0,
			1, height, -1,

			0, height, 0,
			1, height, -1,
			0, height, -1
		]);

		// set geometry position attribute
		wallGeometry.setAttribute('position', new T.BufferAttribute(wallVertices, 3));

		// compute normal values
		wallGeometry.computeVertexNormals();

		// initialize uvs
		const wall_uvs = new Float32Array([
			0, 0,
			1, 0,
			0, 1,

			0, 1,
			1, 0,
			1, 1,

			0, 0,
			1, 0,
			0, 1,

			0, 1,
			1, 0,
			1, 1,

			0, 0,
			1, 0,
			0, 1,

			0, 1,
			1, 0,
			1, 1,

			0, 0,
			1, 0,
			0, 1,

			0, 1,
			1, 0,
			1, 1,

			0, 0,
			0, 0,
			0, 0,

			0, 0,
			0, 0,
			0, 0,
		]);

		// set geometry uvs attribute
		wallGeometry.setAttribute('uv', new T.BufferAttribute(wall_uvs, 2));

		// create texture loader
		let tl = new T.TextureLoader();

		// create array of skyscraper textures
		let textures = [
			"../student_files/textures/skyscraper0.jpg",
			"../student_files/textures/skyscraper1.jpg",
			"../student_files/textures/skyscraper2.jpg",
			"../student_files/textures/skyscraper3.jpg",
		];

		// choose a random texture
		let randTex = Math.floor(Math.random() * textures.length);
		let buildingTex = tl.load(textures[randTex]);

		// initialize material
		let wallMat = new T.MeshStandardMaterial({
			color: "white",
			map: buildingTex
		});

		// construct meshes
		let wallMesh = new T.Mesh(wallGeometry, wallMat);

		// add mesh to group
		skyscraper.add(wallMesh);

		super("Building", skyscraper) // super call to parent class
	}
}