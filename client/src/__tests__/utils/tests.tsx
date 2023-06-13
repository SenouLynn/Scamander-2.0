const tests = {
  //Validity check. Used to make sure that the test suite is working.
  happyPath: () => {
    it("is happy :)", () => {
      expect(true).toBe(true);
    });
  },
};

tests.happyPath();

export default tests;
