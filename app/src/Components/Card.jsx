
import Markdown from 'react-markdown'
import {
	Card as MuiCard, 
	CardContent, 
	Typography, 
	CardMedia, 
	CardActionArea, 
	Grid,
	CardActions,
	Button
	// Pagination,
	// PaginationItem
} from '@material-ui/core'

export const Card = ({ 
	name = "",
	categories = [],
	definition = "",
	images = [],
	abbreviation,
	obfuscated = false,
}) => {
	// const getTitle = () => {
		// if (obfuscated) return "??????"
		// return `${name} {}`
	// } 
	if (obfuscated) {
		definition = (definition || "")
			.split(`\n\n`)[0]
			.split(name).join(" ???? ")
			.split(name.toLowerCase()).join(" ???? ")

			// .replace(``)
		// let a = name.toLowerCase()
		// let b = definition.toLowerCase()
		// while (a.includes(b)) {

		// }
	}
	return (
		<MuiCard key={name} className="Card" variant="outlined" style={{
			// maxWidth:400
		}}>
			{/* <CardActionArea style={{minHeight : 500}}> */}
			<CardContent>
				<Typography color="text.secondary" variant="h5">
					{obfuscated ? 
						<>??????</> : 
						<>{name} {abbreviation && <span>({abbreviation})</span>}</>
					}
				</Typography>
			</CardContent>
				<CardMedia  style={{ 
					// width : "100%", 
					height: "300px" 
					}} image={images && images[0]} />
			<CardContent>
				<Typography >
					<Markdown children={definition} />
				</Typography>
			</CardContent>
			{/* </CardActionArea> */}
			<CardActions>
				{(categories || [])
					.filter(a => !!a)
					.map(category=>(
						<Button size="small">{category}</Button>
					)
				)}
			</CardActions>
			
		</MuiCard>
	)
}