

export default function selectionMap({series,movies}){
        

    return {
        series:[
            { title:'comedy',data:series.filter(item=>item.genre==='comedy') },
            { title:'drama',data:series.filter(item=>item.genre==='Drama') },
            { title:'romance',data:series.filter(item=>item.genre==='Romance') },
            { title:'documentary',data:series.filter(item=>item.genre==='Documentary') },
        ],
        movies:[
            { title:'comedy',data:movies.filter(item=>item.genre==='comedy') },
            { title:'romance',data:movies.filter(item=>item.genre==='romance') },
            { title:'horror',data:movies.filter(item=>item.genre==='horror') },
        ]
    }
}