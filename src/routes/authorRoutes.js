const express = require('express');
const authorRouter=express.Router();
function router(nav){
    var authors=[
        {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century' ,
        img:"e.jfif"
    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'J. K. Rowling, is a British author, philanthropist, film producer and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history',
        img:"d.jfif"
    },
    {
        title:'Pathummayude aadu',
        author:'Basheer',
        genre:'Vaikom Muhammad Basheer,also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham',
        img:"c.jfif"
    },
    
    ]
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    authorRouter.get('/:id',function(req,res){
       const id= req.params.id;
          res.render('author',{
            nav,
            title:'Library',  
            author:authors[id]
          });
        });
    return authorRouter;
}

    module.exports=router;