
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
<p align="center"> 
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/itxcjm/count.svg" />
</p>

---
### Blog：https://www.itxcjm.top
![GithubStats](https://github-readme-stats.vercel.app/api?username=itxcjm&show_icons=true&theme=light&layout=compact&locale=cn&include_all_commits=true&count_private=true)
![Most Used Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=itxcjm&theme=light&layout=compact&count_private=true)\
`

console.log(readme)
