/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

/** Class that creates random colored cars */
export class Car extends GrObject {
  constructor() {
    let car = new T.Group(); // initialize car group

    // initialize the geometry for the wheel and body
    let boxGeometry = new T.BoxGeometry(1, 1, 1);
    let wheelGeometry = new T.CylinderGeometry(1, 1, 1, 32);

    // initialize materials
    let bodyMat = new T.MeshStandardMaterial({
      color: "purple"
    });

    let windowMat = new T.MeshStandardMaterial({
      color: "white"
    });

    let wheelMat = new T.MeshStandardMaterial({
      color: "black"
    });

    // initialize arrays that contain meshes for parts
    let body = [];
    for (let i = 0; i < 2; i++) {
      body[i] = new T.Mesh(boxGeometry, bodyMat);
    }

    let windows = [];
    for (let i = 0; i < 3; i++) {
      windows[i] = new T.Mesh(boxGeometry, windowMat);
    }

    let wheels = [];
    for (let i = 0; i < 4; i++) {
      wheels[i] = new T.Mesh(wheelGeometry, wheelMat);
    }

    // construct body of car and add them to mesh
    body[0].translateY(0.25);
    body[0].scale.set(1, 0.25, 1.5);
    car.add(body[0]);

    body[1].translateY(0.5);
    body[1].translateZ(-0.25);
    body[1].scale.set(1, 0.5, 1);
    car.add(body[1]);

    windows[0].translateY(0.55);
    windows[0].translateZ(-0.25);
    windows[0].scale.set(0.95, 0.25, 1.05);
    car.add(windows[0]);

    windows[1].translateY(0.55);
    windows[1].translateZ(-0.05);
    windows[1].scale.set(0.35, 0.25, 1.05);
    windows[1].rotateY(Math.PI / 2);
    car.add(windows[1]);

    windows[2].translateY(0.55);
    windows[2].translateZ(-0.5);
    windows[2].scale.set(0.35, 0.25, 1.05);
    windows[2].rotateY(Math.PI / 2);
    car.add(windows[2]);

    // construct wheels of car
    wheels[0].translateX(0.5);
    wheels[0].translateY(0.15);
    wheels[0].translateZ(0.45);
    wheels[0].rotateZ(Math.PI / 2);
    wheels[0].scale.set(0.15, 0.15, 0.15);
    car.add(wheels[0]);

    wheels[1].translateX(-0.5);
    wheels[1].translateY(0.15);
    wheels[1].translateZ(0.45);
    wheels[1].rotateZ(Math.PI / 2);
    wheels[1].scale.set(0.15, 0.15, 0.15);
    car.add(wheels[1]);

    wheels[2].translateX(0.5);
    wheels[2].translateY(0.15);
    wheels[2].translateZ(-0.45);
    wheels[2].rotateZ(Math.PI / 2);
    wheels[2].scale.set(0.15, 0.15, 0.15);
    car.add(wheels[2]);

    wheels[3].translateX(-0.5);
    wheels[3].translateY(0.15);
    wheels[3].translateZ(-0.45);
    wheels[3].rotateZ(Math.PI / 2);
    wheels[3].scale.set(0.15, 0.15, 0.15);
    car.add(wheels[3]);

    super("Car", car); // super call to parent class
  }
}