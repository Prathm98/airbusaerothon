import { Card } from 'primereact/card'
import React, { Fragment } from 'react'

const Team = () => {
  // Team details
  const details = [
    {
      name: 'Ankit Barpete',
      pic: 'https://he-s3.s3.amazonaws.com/media/avatars/ankitbarpete1/resized/200/aaue7majozdml5fl3iapxqbwxsxnlti5goohrw5k0z6wga',
      github: 'https://github.com/ankitbarpete',
      hackerearth: 'https://www.hackerearth.com/@ankitbarpete1',
    },
    {
      name: 'Keshav Choudhary',
      pic: 'https://he-s3.s3.amazonaws.com/media/avatars/keshav223/resized/200/2f0b973WhatsApp_Image_2022-05-27',
      github: 'https://github.com/Keshav7aug',
      hackerearth: 'https://www.hackerearth.com/@keshav223',
    },
    {
      name: 'Prathmesh Wakodikar',
      pic: 'https://he-s3.s3.amazonaws.com/media/avatars/prathmeshwakodikar98/resized/200/87b6ace1650981466094.jpg',
      github: 'https://github.com/Prathm98',
      hackerearth: 'https://www.hackerearth.com/@prathmeshwakodikar98',
    },
    {
      name: 'Sanjeev Saini',
      pic: 'https://he-s3.s3.amazonaws.com/media/avatars/sanjeev194/resized/200/eb87c3cmypic.jpg',
      github: 'https://github.com/sanjeev4ds',
      hackerearth: 'https://www.hackerearth.com/@sanjeev194',
    },
  ]

  //   Icons
  const hackerearth =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpklEQVR4nO2dTahVVRiGl6SUSKEWChZBanB1UPlLGNkkIX/ARKyJDiSQNAfiTyLOnOlEvGANciBEXEpwFOpMdCIihQqC0o8giApBmqZFXfNb7Ctxtvvczv72+tbdt+954Rmevd+11nPuvmffs9cNoX7GCCuFAeFn4b7wT0I+VXSKWZa4x2jgoXBbuCjsE2Yo567nvCqcMx4UAuj5U9gdijdp8swRfs0wCARozn7lHHbNZOF6pvIIkIZVynmszIGMxREgDZdCokvBM8KdjMURIB2vKeeyI0syl0aAdHyknMuOfJy5NAKkY4tyLjuyI3NpBEjHDuVcdgQBRi8I4BwEcA4COAcBnIMAzkEA5yCAcxDAOQjgHARwDgI4BwGcgwDOQQDnIIBzEMA5COAcBOjCNeGwsFN4X3hHmCcsDMX36eN36fqF48IPwl+Z5wABFPkvAeJTTXtD8YRT3YwT5odCmLOKMSFADVILEJ9p2CY8qzxuVfqEz4UHXc7ZFtwLcFR4UXm8XhKPPVBx3rbgVoC/ha3K42iyXPgl5J0nBCjlsQDxx/IK5TGa5OVQPKc/0ovuWoBBYbXy9SnyfLDfPwEBuiT+dr9e+dqUeUH4MYz84rsToE2ZJdwNCOBWgJiNAQFcCxA3ZzgZEMCtADHx7mHcyQsBapBDgHhrd3YoNr9YE4qPjW8LUw3OFW9GIUANrAR4WlgnnBB+H+b8V0OxJ1JfovMuHuZcCFCBhQDx3sBPNXvEu4mfCRMSnP9SzXMjQKI8Jxxr2Oe8MKVhj50NOyCAIi8JFxJ1+l4Y36DL7EQ9EKDHxHf+lcS9mu6+WfcShAANcsSgV9yH95UGnQ4ZdEKAiqw17PZFg14bDHshwFCeEi4bdrsXip1TNZlj2AsBhvJhhn7vKbvF+xCDGfq5FuCbDP36G/S7lqGfWwHiH19uZuh3Stkv5nSGfm4F6MvU76ayX8yXmTq6FCDnruYTlR37M3Z0J8DKjB1nKjvuydjRnQDLM3Z8Q9lxa8aOCGDIW8qOmzJ2RABD3lV2RIAeGA0CLFF2RIAeQAAEUAUBEAABSiCAEQhgCAIggCoIgAAIUAIBjEAAQxAAAVRBAARAgBIIYAQCGIIACKAKAiAAApRAACMQwBAEQABVEAABEKAEAhiBAIYgAAKoggAIgAAlEMAIBDAEARBAFQRAAAQogQBGIIAhCIAAqiAAAiBACQQwAgEMQQAEUAUBEAABSiCAEQhgCAI4F2CPsmeOreIfs0rZcVfGjqNWgBvCUmF6DRYJFzN2/E54s2bHpUNjQwBAAEAAyAACOAcBnIMAzkEA57RWgN9C8b904V/uGsxzawU4nKLY/yxfBQRwHQRwHgRwHgRwHgRwHlcCDAiToIMjBvPcWgEgDwjgHARwDgI4BwGcgwDOQQDnJBFgewsGAjq2V6xn7axrwUBAx+aK9ayduS0YCOj4oGI9a2eMcLUFg4F6PBSmVaynKp+0YEBQj28rV1KZscKZFgwKeuMP4fXKlWyQqcLlFgwOhmdQWN9lDRtnovB1KK4vIz1QeJJbQf/oeq0sEA4KV4QHmQYH1dwOxeU5fuafNNyiVeURRF72/TmHdecAAAAASUVORK5CYII='
  const github =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADD5JREFUeF7tnQfMLkUVhh8sWLEbQTBi1ygqIthQNNh7L1GxgWIFBXuLBewIRkXBhi0qdsUGGrBgF6xYsaPGGlHsJU+YL3/xv3dnd2fmn/Gbk9zcm/vtnjlz5t0pZ07Zhk5LrYFtlrr3vfN0ACw5CDoAOgCWXANL3v0+A3QALLkGlrz7fQboAFhyDSx593PPAOcCrgPsCVwVuDxwEWA7wN86rWjgn8CZwB+A04HTgE8DpwD+loVyAcBB3xe4J3DxLJIvD9PfAu8Ajg5gSNrz1AC4NvB84FZJpezMFhr4CPBE4GupVJIKAOcBDgEO6FN7qqHZIh+Xg8OBpwJ/n9taCgDsDLwT2G2uMP39URr4InAP4Mej3lr38FwAXB34KLDjHCH6u5M18EvgNsCpUznMAcA1gROBi05tvL+XRAO/B/YCvj6F21QAOO2fDOwwpdH+TnINnAHccMpyMAUAbvg+09f85IM4l6F7ghsDfxvDaAoAXgwcNKaR/mwxDbwIeMKY1sYCYBfgy8C5xzTSny2mAY+I1wW+GtviWABoiOhGnljtbs5zxwG3j216DAA07/r1d6pbA/8J9y9RR8MxADgS2L/uvnfpggZeATwqRhuxAPDmTqNDv9iJ0ermP/PrcET/15AosQDYA/j8ELP+e1UacDM4uGTHAuBxwEuq6l4XZkgDBwJHDD0UC4CjgP2GmPXfq9LAq4CHD0kUC4ATgL2HmPXfq9LA8cAthySKBYBricfATu1o4EvA7kPixgJA/zR9+jq1o4FvA1cbEjcWAN8FrjTErP9elQa+B1x5SKLaAKAN+0fAxYBrARca6kAjv2tD+Wbw+L0KcI0CcjcHAJW0E7AwXpwT2BW4N3Af4NIFlJayCWfNY4B3Ad9Zxfj8waima3xOag4Anlk9u25EWiLvAjwyeL/kVNwc3v8GPgS8HPgYoF1+IxIY+8xpKOLd5gBwC8Dj5hDpivY04O5QTX4DB/rYIJeKHyJl9/mc1BQA/hrW/b+M0IgxCDpA3DzynbOAn4XpV3dqo3AWETfOME7J2wLbh6XIqTqGTgIeD+iRE0vucbTXnyP2hQnPNQUA7QzarqfQ/YHDgEuEl/8Y/BXdULrx8s/3Af9/DLkBvSKg57N/3JTqd7fYmP4GOBh441am+q21575gcJc+RuB1zzYFANfEB87orIPvtKrxw1i6wVuwiW0tNqaC1c2dX/FUcglQ5lzUFAAODZEuuZRRI9+XbmXTm0LepgCgI6Pr+TKRoV3PzdjhpgDgJkpv42WiDoBVo/1M4NnLNPrh6xcEuaipGeA1S+hvkNsY1BQAPhuOWLm+hhr5fiHmunaG4E0BwHAmg0zHGIJm6GbTX70AYFBnzgCbpgDgiNwNePemD00ZAYzrN+1LTmoOAE8BnpdTIxXxfjKg7SMnNQUAk0wYzpQtG1ZOTU/grUXxvWNCuCa00QwAfg54w/e7CZ1s+RXT5Zns6TKZOtEMAGKvgTPpaVPZGmhrwG0OagIAJpdyQ7TM9B7gzhkUUD0A9J7R0zjGgSKDfqphqQ68sk7tG1A9ANwE6ebVCd4P3CGxIqoHgLt+kxl0OvsE9IHEiqgaACZEvlSKTJeJlbZZ7Ey89SvgwgkFqBoAWvy0/HVa0YBL4p0SKqRqACzj/f/Q2JoE2kTbqahqAJjeNNf5N5UCS/O5HfDBhI1WDQDDo4yc6bSiAQM5v5VQIVUDwKtfN4KdVjRg/iVdzVNR1QBw1zs7130qTVXCR50YIJOKqgaAkTi5fPdTKbA0H28IU96GVg0Aw66WxfsnFkh6Cf0p9uGI56oGgLFxukR1WtGA0U1zIo3W67JqAFg+7od99NdoQJ38IKFOqgbAjUIAZ8L+Ns/KXP+fTNiLqgGgD4C+AJ1WNGCNxbcnVEjVADAiJrdTZEJdFmFl0ovnJGypagC8LeT9Sdjf5ln59TsLpKKqAWByhJ53cO1Qm9dPE3kqqhoAdlJvWFO2dDo7A5re0SmpegA8IKRXSdnpVnndD3hTYuGrB8D7MnnDJtZjEXY6yKT2j6weAF4GOfVZHn2ZyQARk2R6GZSSqgeAnbUQhblylpkeDbwsgwKaAICVr03FlvIWLIMus7H0BtAT0RUytNAEAOz3Q4DXZVBACyzdCL8hk6DNAOAXIWFiyqvQTDpNyvaC4evPlQS7GQCo1WXMEXQ0sG9SSK1l1hQAFN2z8FsyKqQm1qa3NcVsTmoOAOYJ0jX64zm1UgHv24bkEDnzA9nN5gCg0ILgviEPbwVjlVyEu4ZZ7rzJOf8vwyYBYDd0FjWFqokjDSH/fyCdYL3ufXqGMPAt6adZACw6pHeMhQ9TBktsBph2A14N+HdJah4AKusfwUZgzJzFpFoir3bNfOaSpsGnNFUBAAMdLGWutUslWHjBS48dR2pDIHhCMKN47TOCBTbNfq7bW+qsH2PUVgUATId6vXVSqxSV42BOyZBlJRC9Z0y0mNKLdoxy1z9rXJ/ePPeKKdY4p6ER71YBAOV9BHDkKsE1fmgCvXWorjWnUohOFJa1/xxwagDETzLeLXh02znY7v3SBfceoc7QiLEp8mg1ALCi1rOAQ8LAWKxS8+cZof6OpeDc9ccWsRzSnsuFlbMfM/TgiN+VzY3cgwB39C1QNQBYKMt6PlrA9H2Tbhbi4d0dOysclEirXwFuAvw5Eb8FG0O3nGlKVP1MIXp1ALBTXvzsCZwevvj9g9HHMDGPfdef2XPtBk7JViHLQU77lofbzM1dbL+qBIDCu3Gz6tYiP4CnA+vc+/9u8OZYyd4ajl2xSprynC7tbvZqp2oBoOLeHJYD/60zhHX99gs1A144Q7MWkcx9l7B3ZIXTGd1I8mrVALCHd1yVG88NmzOAdXf9ii0YPZbMrmHqudzmY2col6w5M9XYvk15vnoAmB7VapyrE0UYNq6TpKcCK4aPIZNOmXyqBH0ibGJLtDW1jeoBYMfWB4lqNfSoddOwT/DoKCCGyP3EAQXu2BdyHB7aG5JrM39vAgCfCke2haK0D3iGX5RfN3GSPoMuFx6/zKTpYHvEc9/wjbDm+/WXzDjirV7tZe6aAIADbxVwd/8bkTtu08loLPppeOB8waCkwcdCzk8KfgQam0qR1k1nq5opKQBOyxjMaZJkv/CNyL2AThQaik4Oy4O+dJaZM6GCZ36NM+78LTxRinKEcqWWXYObdxRbpVjzq1a8nPfZDvBrh4QNR0atiW7CUmbTiGh6zSNe8XqUrZkcs92HBIwFwAmA599cZJjYPokzZOSSVb4tAOD4YGBLMgMcVaC0q+f3I4Lr1Fk5Ry8B7xYA4OWVpvYkAHgscNgQs0S/e19gW4ZLm0O/RmoBAAeGDyoJAFxLdO4oSc4IGos86mklNI7QI+DiDsHla/vgVGK2EQHjtFeCWgCAezZvRpMAwDtwv0yTGdZKbg5LbcxqB4AJJ3eISccbuwl00PXqGVxTNhEdbiJTZ9nYUndqB4CGNMPOB2kMAHaNmVIGW8z3gK5lx+Rjv4ZzzQDQA8ux2pJxbU1HxgDAFz8cfPkK6XlUM94h5Aq1Xi9IzQCw6kh0CbqxANAe78Yid1zbqJEPDz8YeP2UFye8UysATLTh5s+axFE0FgAy1Z374CjuZR+KtSamkKpWALwg3I1E93EKAExm5C3eoJkxWoo0Dz4U8J6gBNUIAN3jdYYdVYllCgBU8GXD5Uyu7BZTBvFhgBbLElQbAIyPuMGqG9NoHUwFgA3sApwU/PiiG8z4oIGk+hKUoJoAoHuaX74Gs9E0BwA2Zqyfzhg7jW45/Qv6DLwyPdsNOdYCAI1zJpwwKmoSzQXAYjk4toI9gYYPDSAlqAYAuObrUrdwlJnU7xQAsOFtgyOnFxCbdUTUSukNWAkyLkBvpc0gPaG8LHvG2A3fRsKmAsCCt3YCY/mdllLzHlK2HkH6LZSgvYATSzS0qg0tfMeFY56XZEko1yDp5+e53JDpSyaRdOtMTglLUKlahM54uslZ6Ck3ebFjKLxH3Cjz7hiBcgFgIYNhX4LBeED90y4H6Om7XYIo2zODJ7CWSafD0kmnPQLrHKpvoq7rJn6cQ1rx7JMBLmZDEWDaWxz0bMDODYA5CunvFtBAB0ABJdfcRAdAzaNTQLYOgAJKrrmJDoCaR6eAbB0ABZRccxMdADWPTgHZOgAKKLnmJjoAah6dArL9F5c8SZ/t3hvGAAAAAElFTkSuQmCC'

  return (
    <Fragment>
      <br />
      <h1 style={{ textAlign: 'center' }} id='team'>
        OUR TEAM
      </h1>
      <div className='home-card-container p-mt-4'>
        {details.map((item, key) => (
          <Card
            title={item.name}
            key={key}
            className='card-font home-card p-text-center p-shadow-5'
          >
            <img src={item.pic} alt='logo' className='card-logo' />
            <p>
              <a href={item.hackerearth} target='_blank' rel='noreferrer'>
                <img
                  style={{ height: '30px' }}
                  alt='hackerearth'
                  src={hackerearth}
                />
              </a>{' '}
              <a href={item.github} target='_blank' rel='noreferrer'>
                <img style={{ height: '30px' }} alt='github' src={github} />
              </a>
            </p>
          </Card>
        ))}
      </div>
    </Fragment>
  )
}

export default Team
