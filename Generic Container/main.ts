namespace Co{

    let testPeter: Peter[] =[new Peter()];
    let testFritz: Franz[] =[new Franz()];

    let testContainer = new MyContainer<Peter>(testPeter);
    let testContainer2 = new MyContainer<Franz>(testFritz);

    testContainer.talk();
    testContainer2.talk();
}
