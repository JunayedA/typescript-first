const salary:number = 7500;
const friendsSalaries:number[] = [3434,23423,345645,676574,56756,7878,45];
const friends:string[] = ['dsf','dsfsdf','karim','rahim','junayed','dfsdkfj','dsjf'];

friendsSalaries[0] = 10000;
friendsSalaries.push(13100);

// friendsSalaries[4] = '3453';
// friendsSalaries.push('43543');

friends.push('karim');
friends[3] = 'quami';

// friends.push(34343);


let max =0;
for(const salary of friendsSalaries){
    if(salary>max){
        max=salary;
    }
}