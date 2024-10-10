/*jshint esversion: 6 */
// @ts-check

/** Imports */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { Moonlight } from "./moonlight.js";
import { Car } from "./cars.js";
import { Skyscrapers } from "./buildings.js";
import { Road } from "./road.js";
import { Walkway } from "./road.js";
import { Tree } from "./tree.js";
import { StreetLight } from "./streetlight.js";

/** helper function that shifts x position of objects */
function shiftX(grobj, x) {
    grobj.objects.forEach(element => {
        element.translateX(x);
    });
  return grobj;
}

/** helper function that shifts z position of objects */
function shiftZ(grobj, z) {
    grobj.objects.forEach(element => {
        element.translateZ(z);
    });
  return grobj;
}

/** helper function that scales object evently */
function scale(grobj, s) {
    grobj.objects.forEach(element => {
        element.scale.set(s, s, s);
    });
  return grobj;
}

/** helper function that rotates  on Y axis */
function rotateY(grobj, angle) {
    grobj.objects.forEach(element => {
        element.rotateY(angle);
    });
    return grobj;
}

/** Main function */
export function main(world) {
    // add sky and moonlight to the world
    {
        let skybox = new T.CubeTextureLoader().load([
            "../student_files/textures/sky.png",
            "../student_files/textures/sky.png",
            "../student_files/textures/sky.png",
            "../student_files/textures/sky.png",
            "../student_files/textures/sky.png",
            "../student_files/textures/sky.png"
        ]);

        world.scene.background = skybox;
        world.add(new Moonlight());
    }

    // create blocks of random skyscrappers
    {
        // block 0
        {
            let offsetX = -20;
            let offsetZ = -17;

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(building, i * 4), 3);
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(shiftZ(building, 5), i * 4), 3)
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }
        }

        // block 1
        {
            let offsetX = -20;
            let offsetZ = -2;

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(building, i * 4), 3);
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(shiftZ(building, 5), i * 4), 3)
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }
        }

        // block 2
        {
            let offsetX = -20;
            let offsetZ = 13;

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(building, i * 4), 3);
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(shiftZ(building, 5), i * 4), 3)
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }
        }

        // block 3
        {
            let offsetX = 1;
            let offsetZ = -17;

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(building, i * 4), 3);
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(shiftZ(building, 5), i * 4), 3)
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }
        }

        // block 4
        {
            let offsetX = 1;
            let offsetZ = -2;

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(building, i * 4), 3);
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }

            for(let i = 0; i < 4; i++) {
                let building = new Skyscrapers();
                scale(shiftX(shiftZ(building, 5), i * 4), 3)
                shiftZ(shiftX(building, offsetX), offsetZ);
                world.add(building);
            }
        }
    }

    // create main road and walkways
    {
        // main road
        {
            let offsetX = -2;
            for(let i = 0; i < 4; i++) {
                let road = new Road();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                shiftZ(shiftX(tree0, -2), -1);
                shiftZ(shiftX(tree1, 2), 1);
                shiftZ(shiftX(streetlight0, -2), 1);
                shiftZ(shiftX(streetlight1, 2), -1);

                shiftZ(tree0, 5 * -i);
                shiftZ(tree1, 5 * -i);
                shiftZ(streetlight0, 5 * -i);
                shiftZ(streetlight1, 5 * -i);
                shiftZ(road, 5 * -i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(road, offsetX);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(road);
            }

            for(let i = 0; i < 4; i++) {
                let road = new Road();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                shiftZ(shiftX(tree0, -2), -1);
                shiftZ(shiftX(tree1, 2), 1);
                shiftZ(shiftX(streetlight0, -2), 1);
                shiftZ(shiftX(streetlight1, 2), -1);

                shiftZ(tree0, 5 * i);
                shiftZ(tree1, 5 * i);
                shiftZ(streetlight0, 5 * i);
                shiftZ(streetlight1, 5 * i);
                shiftZ(road, 5 * i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(road, offsetX);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(road);
            }
        }

        // walkway 0
        {
            let offsetX = -6;
            let offsetZ = -7;

            for(let i = 0; i < 3; i++) {
                let walkway = new Walkway();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                rotateY(walkway, Math.PI / 2);
                rotateY(tree0, Math.PI / 2);
                rotateY(tree1, Math.PI / 2);
                rotateY(streetlight0, Math.PI / 2);
                rotateY(streetlight1, Math.PI / 2);

                shiftX(shiftZ(tree0, 2), -2);
                shiftX(shiftZ(tree1, -2), 2);
                shiftX(streetlight0, -2);
                shiftX(streetlight1, 2);

                shiftZ(tree0, 5 * -i);
                shiftZ(tree1, 5 * -i);
                shiftZ(streetlight0, 5 * -i);
                shiftZ(streetlight1, 5 * -i);
                shiftZ(walkway, 5 * -i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(walkway, offsetX);

                shiftZ(tree0, offsetZ);
                shiftZ(tree1, offsetZ);
                shiftZ(streetlight0, offsetZ);
                shiftZ(streetlight1, offsetZ);
                shiftZ(walkway, offsetZ);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(walkway);
            }
        }

        // walkway 1
        {
            let offsetX = 8;
            let offsetZ = -7;

            for(let i = 0; i < 3; i++) {
                let walkway = new Walkway();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                rotateY(walkway, Math.PI / 2);
                rotateY(tree0, Math.PI / 2);
                rotateY(tree1, Math.PI / 2);
                rotateY(streetlight0, Math.PI / 2);
                rotateY(streetlight1, Math.PI / 2);

                shiftX(shiftZ(tree0, 2), -2);
                shiftX(shiftZ(tree1, -2), 2);
                shiftX(streetlight0, -2);
                shiftX(streetlight1, 2);

                shiftZ(tree0, 5 * -i);
                shiftZ(tree1, 5 * -i);
                shiftZ(streetlight0, 5 * -i);
                shiftZ(streetlight1, 5 * -i);
                shiftZ(walkway, 5 * -i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(walkway, offsetX);

                shiftZ(tree0, offsetZ);
                shiftZ(tree1, offsetZ);
                shiftZ(streetlight0, offsetZ);
                shiftZ(streetlight1, offsetZ);
                shiftZ(walkway, offsetZ);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(walkway);
            }
        }

        // walkway 2
        {
            let offsetX = 8;
            let offsetZ = 3;

            for(let i = 0; i < 3; i++) {
                let walkway = new Walkway();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                rotateY(walkway, Math.PI / 2);
                rotateY(tree0, Math.PI / 2);
                rotateY(tree1, Math.PI / 2);
                rotateY(streetlight0, Math.PI / 2);
                rotateY(streetlight1, Math.PI / 2);

                shiftX(shiftZ(tree0, 2), -2);
                shiftX(shiftZ(tree1, -2), 2);
                shiftX(streetlight0, -2);
                shiftX(streetlight1, 2);

                shiftZ(tree0, 5 * i);
                shiftZ(tree1, 5 * i);
                shiftZ(streetlight0, 5 * i);
                shiftZ(streetlight1, 5 * i);
                shiftZ(walkway, 5 * i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(walkway, offsetX);

                shiftZ(tree0, offsetZ);
                shiftZ(tree1, offsetZ);
                shiftZ(streetlight0, offsetZ);
                shiftZ(streetlight1, offsetZ);
                shiftZ(walkway, offsetZ);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(walkway);
            }
        }
        
        // walkway 3
        {
            let offsetX = -6;
            let offsetZ = 3;

            for(let i = 0; i < 3; i++) {
                let walkway = new Walkway();
                let tree0 = new Tree();
                let tree1 = new Tree();
                let streetlight0 = new StreetLight();
                let streetlight1 = new StreetLight();

                rotateY(walkway, Math.PI / 2);
                rotateY(tree0, Math.PI / 2);
                rotateY(tree1, Math.PI / 2);
                rotateY(streetlight0, Math.PI / 2);
                rotateY(streetlight1, Math.PI / 2);

                shiftX(shiftZ(tree0, 2), -2);
                shiftX(shiftZ(tree1, -2), 2);
                shiftX(streetlight0, -2);
                shiftX(streetlight1, 2);

                shiftZ(tree0, 5 * i);
                shiftZ(tree1, 5 * i);
                shiftZ(streetlight0, 5 * i);
                shiftZ(streetlight1, 5 * i);
                shiftZ(walkway, 5 * i);

                shiftX(tree0, offsetX);
                shiftX(tree1, offsetX);
                shiftX(streetlight0, offsetX);
                shiftX(streetlight1, offsetX);
                shiftX(walkway, offsetX);

                shiftZ(tree0, offsetZ);
                shiftZ(tree1, offsetZ);
                shiftZ(streetlight0, offsetZ);
                shiftZ(streetlight1, offsetZ);
                shiftZ(walkway, offsetZ);

                world.add(tree0);
                world.add(tree1);
                world.add(streetlight0);
                world.add(streetlight1);
                world.add(walkway);
            }
        }        
    }
    
    // add cars to the road
    {
        world.add(shiftX(new Car(), -3));
        world.add(shiftZ(shiftX(new Car(), -3), -10));
        world.add(shiftZ(shiftX(new Car(), -3), 15));
        world.add(rotateY(shiftZ(shiftX(new Car(), -1), 7), Math.PI));
        world.add(rotateY(shiftZ(shiftX(new Car(), -1), -8), Math.PI));
    }
}