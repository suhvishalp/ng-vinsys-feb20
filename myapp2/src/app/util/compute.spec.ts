import {compute} from './compute';

//to define a test suite (write multiple test cases in a suite)
describe('compute', ()=>{

    //describe test1
    it('should increment the given number if it is positive', ()=>{
          let result = compute(1)
          expect(result).toBe(2)
    })

    //test2
    it('should return 0 if the given number  is negative', ()=>{
        let result = compute(-1)
        expect(result).toBe(0)
  })
})