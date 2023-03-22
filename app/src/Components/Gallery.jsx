import config from '../../../lib/config.yaml'
import Markdown from 'react-markdown'
import {
	Card as MuiCard, 
	CardContent, 
	Typography, 
	CardMedia, 
	CardActionArea, 
	Grid 
} from '@material-ui/core'

export const Card = ({
	name = [],
	categories = [],
	definition = "",
	images = [],
	abbreviation,
	obfuscated = false
}) => (
	<MuiCard key={name} className="Card" variant="outlined" style={{maxWidth:400}}>
		<CardActionArea style={{minHeight : 500}}>
		<CardContent>
			<Typography color="text.secondary">
				{obfuscated ? 
					<h3>??????</h3> : 
					<h3>{name} {abbreviation && <span>({abbreviation})</span>}</h3>
				}
			</Typography>
			<CardMedia  style={{ width : "100%", height: "300px" }} image={images && images[0]} />
			<Typography >
				<Markdown children={definition} />
			</Typography>
		</CardContent>
		</CardActionArea>
	</MuiCard>
)
const { cards } = config

export const Gallery = () => (
	<>
		<h1>
			Gallery
		</h1>
		<div style={{width:1200}}>
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