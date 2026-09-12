{
    let varC = 10;
    let varB = 20;
    console.log(varC ?? varB);
}
{
    let varC = null;
    let varB = 20;
    console.log(varC ?? varB);
}
{ 
    let varC = null;
    let varB = undefined;
    console.log(varC ?? varB);
}