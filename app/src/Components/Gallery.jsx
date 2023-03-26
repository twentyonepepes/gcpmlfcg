import config from '../../../lib/config.yaml'
// import Markdown from 'react-markdown'

import {
	Grid ,
	// Pagination,
	// PaginationItem
} from '@material-ui/core'

import {
	Pagination,
	PaginationItem
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Card } from './Card'

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export const Gallery = () => {
	const [pageNum,setPageNum] = useState(6)
	const cards = config.cards
		.filter(card => card && card.name)
		.filter(card => card.name[0].toLocaleLowerCase() === alphabet[pageNum - 1].toLocaleLowerCase())
	console.log(pageNum)

	// useEffect(()=>{
	// 	setLetter("f")
	// },[])
	return (
		<>
			<h1>
				Gallery
			</h1>
			<div style={{width:1200}}>
			<Pagination 
				onChange={(_e,v)=>{
					// console.log("Set letter...,", v, v-1); 
					setPageNum(v)
					// setLetter(alphabet[v])
					// setLetter(alphabet[v ])
				}}
				// page={alphabet.indexOf(letter)}
				page={pageNum}
				// defaultPage={alphabet.indexOf(letter)} 
				// defaultValue={alphabet.indexOf(letter)}
				count={26} 
				variant="outlined" 
				renderItem={(item)=>(
					<PaginationItem {...item} page={alphabet[item.page - 1]}/>
				)}
			/>
			<Grid container spacing={2}>
				{cards.filter(card => card.definition).map(card => (
					<Grid item xs={4}>
						<Card {...card} />
					</Grid>
				))}
			</Grid>
			</div>
			
		</>
	)
}