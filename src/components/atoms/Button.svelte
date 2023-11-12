<script>
  export let url;
  export let className;
  export let title;
  export let icon;
  export let external = false;
</script>

<a href={url} class={className} target={external ? '_blank' : '_self'}>
  <span>{title}</span>
  <i class={`ph ph-${icon} text-2xl`} />
</a>
