describe('Objects Lab', function () {
  describe('me', function () {
    it('should exist', function () {
      expect(me).toBeDefined();
    });
    it('should be an object', function () {
      expect(me).toEqual(jasmine.any(Object));
    });
    it('should have name and age keys', function () {
      expect(me.hasOwnProperty('name')).toBe(true);
      expect(me.hasOwnProperty('age')).toBe(true);
    });
    it('should have values for name and age', function () {
      expect(me.name).toBeTruthy();
      expect(me.age).toBeTruthy();
    });
  });

  describe('favoriteThings', function () {
    it('should exist', function () {
      expect(favoriteThings).toBeDefined();
    });
    it('should have band, food, person, book, movie, and holiday keys', function () {
      expect(favoriteThings.hasOwnProperty('band')).toBe(true);
      expect(favoriteThings.hasOwnProperty('food')).toBe(true);
      expect(favoriteThings.hasOwnProperty('person')).toBe(true);
      expect(favoriteThings.hasOwnProperty('book')).toBe(true);
      expect(favoriteThings.hasOwnProperty('movie')).toBe(true);
      expect(favoriteThings.hasOwnProperty('holiday')).toBe(true);
    });
    it('should have values for all keys', function () {
      expect(favoriteThings.band).toBeTruthy();
      expect(favoriteThings.food).toBeTruthy();
      expect(favoriteThings.person).toBeTruthy();
      expect(favoriteThings.book).toBeTruthy();
      expect(favoriteThings.movie).toBeTruthy();
      expect(favoriteThings.holiday).toBeTruthy();
    });
  });

  describe('favoriteThings (part 2)', function () {
    it('should still exist', function () {
      expect(favoriteThings).toBeDefined();
    });
    it('should now have car and brand keys', function () {
      expect(favoriteThings.hasOwnProperty('car')).toBe(true);
      expect(favoriteThings.hasOwnProperty('brand')).toBe(true);
    });
    it('should have values for car and brand', function () {
      expect(favoriteThings.car).toBeTruthy();
      expect(favoriteThings.brand).toBeTruthy();
    });
  });

  describe('favoriteThings (part 3)', function () {
    it('food should be "Chicken Nuggets"', function () {
      expect(favoriteThings.food).toBe('Chicken Nuggets');
    });
    it('book should be "Harry Potter"', function () {
      expect(favoriteThings.book).toBe('Harry Potter');
    });
  });

  describe('user2', function () {
    it('name should be "Bryan G. Smith" and email should be "bryan.smith@devmounta.in" ', function () {
      expect(user2.name).toBe('Bryan G. Smith');
      expect(user2.email).toBe('bryan.smith@devmounta.in');
    });
  });

  describe('shoppingCart', function () {
    it('addToCart should exist', function () {
      expect(addToCart).toBeDefined();
    });
    it('function should add new key-value pairs to the cart', function () {
      addToCart('eggs', 12);
      expect(shoppingCart['eggs']).toBe(12);
      addToCart('pizza', 2);
      expect(shoppingCart['pizza']).toBe(2);
    });
  });

  describe('greaterThan10', function () {
    it('should exist', function () {
      expect(greaterThan10).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(greaterThan10({ one: 1, two: 2, three: 11, four: 44, five: 5 })).toEqual({
        one: 1,
        two: 2,
        three: 0,
        four: 0,
        five: 5,
      });
      expect(greaterThan10({ one: 10, two: 20, three: 11, four: 4, five: 335 })).toEqual({
        one: 10,
        two: 0,
        three: 0,
        four: 4,
        five: 0,
      });
    });
  });

  describe('double', function () {
    it('should exist', function () {
      expect(double).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(double({ one: 1, two: 2, three: 3 })).toEqual({ one: 2, two: 4, three: 6 });
      expect(double({ one: 177, two: 2234, three: 23 })).toEqual({
        one: 354,
        two: 4468,
        three: 46,
      });
    });
  });

  describe('showValues', function () {
    it('should return the correct value', function () {
      expect(
        showValues({
          one: 'These',
          two: ' are',
          three: ' the',
          four: ' property',
          five: ' values.',
        }),
      ).toBe('These are the property values.');
      expect(
        showValues({
          one: 'Conquer',
          two: ' the',
          three: ' world',
          four: ' as a',
          five: ' javascript ninja!',
        }),
      ).toBe('Conquer the world as a javascript ninja!');
    });
  });

  describe('makeCard', function () {
    it('should exist', function () {
      expect(makeCard).toBeDefined();
    });
    it('should return an object with given cardNumber, expirationDate, and securityCode', function () {
      const card = makeCard(123, '2/28/2028', 999);
      expect(card.cardNumber).toBe(123);
      expect(card.expirationDate).toBe('2/28/2028');
      expect(card.securityCode).toBe(999);
    });
  });

  describe('removePassword', function () {
    it('should exist', function () {
      expect(removePassword).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(removePassword({ username: 'happyCow23', password: '123jumptheMoon' })).toEqual({
        username: 'happyCow23',
      });
      expect(removePassword({ username: 'JSQueen', password: 'es6RulesTheWorld' })).toEqual({
        username: 'JSQueen',
      });
    });
  });

  describe('deleteTheBigNumbers', function () {
    it('should exist', function () {
      expect(deleteTheBigNumbers).toBeDefined();
    });
    it('properties should be deleted in the for in loop', function () {
      expect(deleteTheBigNumbers).toEqual({ first: 10, second: 20 });
    });
  });

  describe('Object destructuring for new variables', function () {
    describe('color', function () {
      it('should exist', function () {
        expect(color).toBeDefined();
      });
      it('should have the correct value', function () {
        expect(color).toBe('red');
      });
    });

    describe('model', function () {
      it('should exist', function () {
        expect(model).toBeDefined();
      });
      it('should have the correct value', function () {
        expect(model).toBe('tacoma');
      });
    });

    describe('make', function () {
      it('should exist', function () {
        expect(make).toBeDefined();
      });
      it('should have the correct value', function () {
        expect(make).toBe('toyota');
      });
    });

    describe('year', function () {
      it('should exist', function () {
        expect(year).toBeDefined();
      });
      it('should have the correct value', function () {
        expect(year).toBe(1994);
      });
    });
  });

  describe('greeting', function () {
    it('should exist', function () {
      expect(greeting).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(greeting({ firstName: 'Henry', lastName: 'Von Eckleberry', title: 'Sir' })).toBe(
        'Hello, Sir Henry Von Eckleberry!',
      );
      expect(greeting({ firstName: 'Betty', lastName: 'LeJavascript', title: 'Queen' })).toBe(
        'Hello, Queen Betty LeJavascript!',
      );
    });
  });

  describe('totalPopulation', function () {
    it('should exist', function () {
      expect(totalPopulation).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(totalPopulation({ utah: 10, california: 29087, texas: 82937, arizona: 28347 })).toBe(
        140381,
      );
      expect(totalPopulation({ utah: 1045, california: 987, texas: 192937, arizona: 347 })).toBe(
        195316,
      );
    });
  });

  describe('usCanadaBorder', function () {
    it('should exist', function () {
      expect(usCanadaBorder).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(usCanadaBorder([49, -100])).toBe(true);
      expect(usCanadaBorder([49, 26])).toBe(false);
      expect(usCanadaBorder([0, -120])).toBe(false);
    });
  });

  describe('Update Employee Info', function () {
    const returnedArr = employeeUpdater();
    it('Theo Trill object should be removed', function () {
      let flag = true;
      returnedArr.map(function (employee) {
        if (employee.firstName === 'Theo') {
          flag = false;
        }
      });
      expect(flag).toEqual(true);
    });

    it('Lorie should be in HR department', function () {
      const lorie = returnedArr.filter((e) => e.firstName === 'Lorie');
      expect(lorie[0].department).toEqual('HR');
    });
  });

  describe('Fluffy & friends', function () {
    it("grumpyActivity value should be 'eat food'", function () {
      expect(grumpyActivity).toEqual('eat food');
    });
    it('fluffy2ndFriend should be "Lazy Bones"', function () {
      expect(fluffy2ndFriend).toEqual('Lazy Bones');
    });
  });

  describe('Driving record', function () {
    it('recordCleaner should exist', function () {
      expect(recordCleaner).toEqual(jasmine.any(Function));
    });
    it('No longer at fault for accidents', function () {
      recordCleaner();
      console.log(myCar);
      let flag = true;
      myCar.accidents.map(function (accident) {
        if (accident.atFaultForAccident) {
          flag = false;
        }
      });
      expect(flag).toEqual(true);
    });
  });

  describe('largeNumbers', function () {
    it('should exist', function () {
      expect(largeNumbers).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(largeNumbers({ first: 10, second: 2, third: 90 })).toBe(2);
      expect(largeNumbers({ first: 1, second: 2, third: 80 })).toBe(1);
    });
  });

  describe('numberGroups', function () {
    it('should exist', function () {
      expect(numberGroups).toBeDefined();
    });
    it('should return the correct value', function () {
      expect(numberGroups({ a: [1, 2, 3], b: [1], c: [1, 2, 3, 4, 5] })).toEqual([1, 2, 3, 4, 5]);
      expect(numberGroups({ a: [1, 2, 3], b: [1, 2, 3, 4], c: [1, 2, 3] })).toEqual([1, 2, 3, 4]);
    });
  });
});
