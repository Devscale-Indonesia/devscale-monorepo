'use client';

import { Card } from '@devscale/shared-ui';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

export const BootcampReview = () => {
  const data = 'Well done mas! \n```js\nconst value = "test"\nconsole.log(value)\n```';

  return (
    <Card className="bg-slate-800/20 border-slate-800/30">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">{/* <h5 className="text-zinc-400 text-sm flex gap-2">Assignment Review #1 </h5> */}</div>
          <MDEditor.Markdown source={data} style={{ background: 'transparent' }} />
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p>Assignment Points : </p>
            <div className="flex gap-1 items-baseline bg-gradient-to-r from-orange-500 to-orange-300 w-fit bg-clip-text text-transparent font-bold text-xl tracking-tight">
              98
            </div>
            <span className="text-sm">pts</span>
          </div>
          <p className="text-xs text-zinc-600">Sunday, 12 Jan 2023</p>
        </div>
      </div>
    </Card>
  );
};
