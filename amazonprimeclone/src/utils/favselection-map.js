

export default function favselectionMap({favseries,favmovies}){
    
    const favContentDataSeries = favmovies.map(item=>{
        return item;
    });
     const favContentDataMovies = favseries.map(item=>{
        return item;
    });

    const favContentData = [...favContentDataSeries,...favContentDataMovies];
   
    return {
        series:[
            { title:'comedy',data:favseries.filter(item=>item.genre==='comedy') },
            { title:'drama',data:favseries.filter(item=>item.genre==='Drama') },
            { title:'romance',data:favseries.filter(item=>item.genre==='Romance') },
            { title:'documentary',data:favseries.filter(item=>item.genre==='Documentary') },
        ],
        movies:[
            { title:'comedy',data:favmovies.filter(item=>item.genre==='comedy') },
            { title:'romance',data:favmovies.filter(item=>item.genre==='romance') },
            { title:'horror',data:favmovies.filter(item=>item.genre==='horror') },
        ],
        favContentData:favContentData
    }
}