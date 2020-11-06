let demoList = [
{
id: 1,
name: 'wangyu',
age: 31,
job: '测试工程师'
}
]

export default {
	'get|/demos': () => {
		return {
			status: 200,
			message: 'success',
			data: demoList
		}
	}
}