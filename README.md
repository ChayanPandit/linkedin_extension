# ChatGPT Writer Take-Home Coding Assignment



## Demo video




https://github.com/ChayanPandit/linkedin_extension/assets/103516726/09be4358-db9c-4e3f-9404-7136afeb6022




First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

See how to load the extension: https://docs.plasmo.com/framework/workflows/dev#loading-the-extension

For further guidance, [visit our Documentation](https://docs.plasmo.com/).

## Where to edit?

- The main code is located in src/content.tsx. By default, when you run the extension, it displays a static count button on the LinkedIn website. You need to replace it with your own code.

![count btn on linkedin](count_btn_on_linkedin.png)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
