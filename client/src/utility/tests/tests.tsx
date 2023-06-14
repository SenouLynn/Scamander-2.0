const tests = {
  //Validity check. Used to make sure that the test suite is working.
  happyPath: () => {
    it("is happy :)", () => {
      expect(true).toBe(true);
    });
  },
  //Todo: Type the testPack object.
  simpleObject: ({ testPack }: any) => {
    it("should return truthy", () => {
      const result = testPack.function();
      expect(result).toBeTruthy();
    });

    it("should return object", () => {
      const result = testPack.function();
      expect(typeof result).toBe("object");
    });
  },
  keyCheck: ({ testPack }: { testPack: TestPack }) => {
    testPack.keys?.forEach((test) => {
      it(test.case, () => {
        const res = testPack.function && testPack.function();
        expect(typeof res[test.key as keyof Pack]).toBe(test.type);
      });
    });
  },
};

tests.happyPath();

export default tests;
