FROM node:12 as production

FROM production as development

# Set in non-interactive mode.
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get install --assume-yes --no-install-recommends git procps dialog \
  && apt-get install --assume-yes --no-install-recommends locales tmux zsh jq \
  && echo 'en_US.UTF-8 UTF-8' > /etc/locale.gen \
  && locale-gen

# Reset DEBIAN_FRONTEND to default(`dialog`).
# If you no need `dialog`, you can set `DEBIAN_FRONTEND=readline`.
# see also: man 7 debconf
ENV DEBIAN_FRONTEND=
