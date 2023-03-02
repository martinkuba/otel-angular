import { registerInstrumentations } from '@opentelemetry/instrumentation';
import {
    WebTracerProvider,
    ConsoleSpanExporter,
    SimpleSpanProcessor
} from '@opentelemetry/sdk-trace-web';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
 
const provider = new WebTracerProvider();
 
// For demo purposes only, immediately log traces to the console
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register();

registerInstrumentations({
    instrumentations: [
        new XMLHttpRequestInstrumentation({
            propagateTraceHeaderCorsUrls: /.*/,
        }),
        new FetchInstrumentation({
            propagateTraceHeaderCorsUrls: ['https://httpbin.org']
        })
    ],
});
