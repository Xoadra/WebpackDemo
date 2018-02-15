



// Example of type deferment for non-code assets like svg files
declare module "*.svg" {
	const content: any
	export default content
}


